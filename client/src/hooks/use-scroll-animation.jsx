import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Enhanced hook with better performance and options
export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once !== false) {
            observer.unobserve(entry.target);
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -100px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isVisible];
};

// Advanced hook for multiple elements with stagger
export const useScrollAnimations = (staggerDelay = 100) => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-scroll]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const animation = entry.target.dataset.scroll;
            const delay = entry.target.dataset.delay || index * staggerDelay;
            
            setTimeout(() => {
              entry.target.classList.add(`animate-${animation}`);
            }, delay);
            
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [staggerDelay]);
};

// Framer Motion based scroll animation hook
export const useMotionAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { 
    threshold: 0.15,
    margin: '0px 0px -100px 0px'
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return [ref, controls];
};

// Enhanced AnimatedSection with Framer Motion
export const AnimatedSection = ({ 
  children, 
  animation = 'fadeInUp', 
  className = '', 
  delay = 0,
  duration = 0.8,
  stagger = 0.1,
  ...props 
}) => {
  const [ref, controls] = useMotionAnimation();

  const animations = {
    fadeInUp: {
      hidden: { opacity: 0, y: 60, scale: 0.95 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -60, scale: 0.95 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -60, scale: 0.95 },
      visible: { 
        opacity: 1, 
        x: 0, 
        scale: 1,
        transition: { 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 60, scale: 0.95 },
      visible: { 
        opacity: 1, 
        x: 0, 
        scale: 1,
        transition: { 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration,
          delay,
          ease: [0.34, 1.56, 0.64, 1]
        }
      }
    },
    slideInUp: {
      hidden: { opacity: 0, y: 100 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    staggerChildren: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: stagger,
          delayChildren: delay
        }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animations[animation] || animations.fadeInUp}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Staggered list animation component
export const StaggeredList = ({ 
  children, 
  className = '', 
  delay = 0,
  stagger = 0.1,
  ...props 
}) => {
  const [ref, controls] = useMotionAnimation();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {Array.isArray(children) ? 
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        )) : 
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      }
    </motion.div>
  );
};

// Parallax scroll effect
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};