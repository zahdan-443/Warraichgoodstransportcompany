import { useEffect } from 'react';
import { getAssetUrl } from '../utils/assetPath';

/**
 * Preloads and decodes site images in batches of 3 after window "load",
 * hero LCP image completion, and requestIdleCallback (1200ms fallback).
 * Skips entirely on Data Saver or slow-2g/2g connections.
 */
export function useWarmImages(urls: readonly string[], onIdle?: () => void): void {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const conn = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    if (conn?.saveData || conn?.effectiveType === 'slow-2g' || conn?.effectiveType === '2g') {
      return;
    }

    let cancelled = false;
    let idleId: number | null = null;
    let timerId: ReturnType<typeof setTimeout> | null = null;

    const runWarmup = async () => {
      if (cancelled) return;
      onIdle?.();

      const resolved = Array.from(new Set(urls.map((u) => getAssetUrl(u))));
      for (let i = 0; i < resolved.length && !cancelled; i += 3) {
        await Promise.all(
          resolved.slice(i, i + 3).map((src) => {
            const img = new Image();
            img.decoding = 'async';
            img.src = src;
            return (typeof img.decode === 'function' ? img.decode() : Promise.resolve()).catch(
              () => {}
            );
          })
        );
      }
    };

    const scheduleIdle = () => {
      if (cancelled) return;
      const w = window as Window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      };
      if (typeof w.requestIdleCallback === 'function') {
        idleId = w.requestIdleCallback(() => {
          void runWarmup();
        }, { timeout: 2500 });
      } else {
        timerId = setTimeout(() => {
          void runWarmup();
        }, 1200);
      }
    };

    const waitForHeroAndSchedule = () => {
      if (cancelled) return;
      const heroImg = document.querySelector<HTMLImageElement>('#hero img');
      if (heroImg && !heroImg.complete) {
        const done = () => scheduleIdle();
        heroImg.addEventListener('load', done, { once: true });
        heroImg.addEventListener('error', done, { once: true });
      } else {
        scheduleIdle();
      }
    };

    const onWindowLoad = () => waitForHeroAndSchedule();

    if (document.readyState === 'complete') {
      waitForHeroAndSchedule();
    } else {
      window.addEventListener('load', onWindowLoad, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener('load', onWindowLoad);
      const w = window as Window & { cancelIdleCallback?: (id: number) => void };
      if (idleId !== null && typeof w.cancelIdleCallback === 'function') {
        w.cancelIdleCallback(idleId);
      }
      if (timerId !== null) {
        clearTimeout(timerId);
      }
    };
  }, [urls, onIdle]);
}
