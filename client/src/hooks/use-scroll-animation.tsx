import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(options?: IntersectionObserverInit) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasAnimated, options]);

  return { ref: elementRef, isVisible, hasAnimated };
}

export function useStaggeredAnimation(itemCount: number, delay = 100) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger staggered animations
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => new Set(Array.from(prev).concat([i])));
            }, i * delay);
          }
          observer.unobserve(container);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-30px',
      }
    );

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [itemCount, delay]);

  return { ref: containerRef, visibleItems };
}

// Animation class generator
export function getAnimationClass(
  animationType: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'zoom-in' | 'slide-in-up' | 'bounce-in-up' | 'flip-in-x' | 'slide-in-scale' | 'float-in',
  isVisible: boolean,
  delay?: number
) {
  const delayClass = delay ? `animate-delay-${delay}` : '';
  const animationClass = isVisible ? `animate-${animationType}` : '';
  
  return `${animationClass} ${delayClass}`.trim();
}