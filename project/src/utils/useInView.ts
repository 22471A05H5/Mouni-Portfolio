import { useState, useEffect, RefObject } from 'react';

interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInView(
  ref: RefObject<Element>,
  options: IntersectionOptions = { threshold: 0 }
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isInView;
}