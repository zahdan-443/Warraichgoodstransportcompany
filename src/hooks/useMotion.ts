import { useEffect, useRef, useState, RefObject } from 'react';

const prefersReducedMotion = (): boolean =>
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

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
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

export function useCountUp(target: number, startFrom = 0, duration = 650): number {
  const [val, setVal] = useState(target);
  const ranRef = useRef(false);

  useEffect(() => {
    if (ranRef.current || prefersReducedMotion() || typeof requestAnimationFrame === 'undefined') return;
    ranRef.current = true;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(startFrom + (target - startFrom) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, startFrom, duration]);

  return val;
}
