import { useEffect, useState, RefObject } from 'react';
import { MOTION_CONFIG } from '../config/motionConfig';

export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useInView(ref: RefObject<HTMLElement | null>, rootMargin = '80px'): boolean {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin]);

  return inView;
}

export function useScrollReveal(routeKey: string): void {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!nodes.length) return;

    if (!MOTION_CONFIG.scrollReveal || prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      nodes.forEach((n) => n.setAttribute('data-reveal', 'visible'));
      return;
    }

    const fold = window.innerHeight * 0.94;
    const toObserve: HTMLElement[] = [];

    nodes.forEach((el) => {
      if (el.getAttribute('data-reveal') === 'visible') return;
      if (el.getBoundingClientRect().top < fold) {
        el.setAttribute('data-reveal', 'visible');
      } else {
        el.setAttribute('data-reveal', 'hidden');
        toObserve.push(el);
      }
    });

    if (!toObserve.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-reveal', 'visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
    );

    toObserve.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [routeKey]);
}

export function useScrollPause(delayMs = 150): void {
  useEffect(() => {
    if (typeof window === 'undefined' || prefersReducedMotion()) return;
    const root = document.documentElement;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let scrolling = false;

    const onScroll = () => {
      if (!scrolling) {
        scrolling = true;
        root.classList.add('is-scrolling');
      }
      if (timer !== null) clearTimeout(timer);
      timer = setTimeout(() => {
        scrolling = false;
        root.classList.remove('is-scrolling');
      }, delayMs);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timer !== null) clearTimeout(timer);
      root.classList.remove('is-scrolling');
    };
  }, [delayMs]);
}

interface ParallaxLayer {
  ref: RefObject<HTMLElement | null>;
  speed: number;
  maxOffset?: number;
}

/**
 * Lightweight passive scroll + requestAnimationFrame parallax for Hero layers.
 * Mutates only compositor transform: translate3d(0, y, 0) directly on refs.
 */
export function useParallax(
  containerRef: RefObject<HTMLElement | null>,
  layers: ParallaxLayer[],
  enabled = true
): void {
  useEffect(() => {
    if (
      !enabled ||
      !MOTION_CONFIG.heroParallax ||
      typeof window === 'undefined' ||
      prefersReducedMotion()
    ) {
      return;
    }

    let rafId: number | null = null;

    const update = () => {
      rafId = null;
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const scrollY = Math.max(0, window.scrollY);
      for (const layer of layers) {
        const el = layer.ref.current;
        if (!el) continue;
        const limit = layer.maxOffset ?? 80;
        const offset = Math.max(-limit, Math.min(limit, scrollY * layer.speed));
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      }
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      for (const layer of layers) {
        if (layer.ref.current) {
          layer.ref.current.style.transform = '';
        }
      }
    };
  }, [containerRef, layers, enabled]);
}
