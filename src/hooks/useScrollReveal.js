import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal
 * High-performance, lightweight IntersectionObserver hook for triggering
 * cinematic scroll reveals and staggers.
 *
 * - Automatically unobserves after entrance to keep memory footprint minimal.
 * - Detects prefers-reduced-motion and reveals immediately if reduced motion is preferred.
 * - Hardware-accelerated GPU transitions.
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.12,
    rootMargin = '0px 0px -40px 0px',
    triggerOnce = true,
    delay = 0,
  } = options;

  const ref = useRef(null);

  // Initialize with true if reduced motion is requested or IntersectionObserver is unsupported
  const [isRevealed, setIsRevealed] = useState(() => {
    if (typeof window !== 'undefined') {
      if (
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        !('IntersectionObserver' in window)
      ) {
        return true;
      }
    }
    return false;
  });

  useEffect(() => {
    if (isRevealed && triggerOnce) return;

    const element = ref.current;
    if (!element) return;

    let timeoutId = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            timeoutId = setTimeout(() => {
              setIsRevealed(true);
            }, delay);
          } else {
            setIsRevealed(true);
          }

          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsRevealed(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (element) observer.unobserve(element);
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, delay, isRevealed]);

  return [ref, isRevealed];
}

export default useScrollReveal;
