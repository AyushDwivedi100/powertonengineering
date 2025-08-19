// Animation constants and utilities for consistent animations across the app

export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slowest: 0.8
};

export const EASING = {
  // Standard easing functions
  easeOut: [0.25, 0.46, 0.45, 0.94],
  easeIn: [0.55, 0.06, 0.68, 0.19],
  easeInOut: [0.65, 0.05, 0.36, 1],
  
  // Bouncy animations
  bounceOut: [0.34, 1.56, 0.64, 1],
  bounceIn: [0.6, -0.28, 0.735, 0.045],
  
  // Smooth animations
  smooth: [0.25, 0.1, 0.25, 1],
  sharp: [0.4, 0, 0.6, 1],
};

export const STAGGER_DELAYS = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
  slowest: 0.2
};

// Common animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: ANIMATION_DURATIONS.slow,
      ease: EASING.easeOut
    }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: ANIMATION_DURATIONS.slow,
      ease: EASING.easeOut
    }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { 
      duration: ANIMATION_DURATIONS.slow,
      ease: EASING.easeOut
    }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { 
      duration: ANIMATION_DURATIONS.slow,
      ease: EASING.easeOut
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.bounceOut
    }
  }
};

export const slideInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: ANIMATION_DURATIONS.slow,
      ease: EASING.easeOut
    }
  }
};

// Stagger container variants
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_DELAYS.normal,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.easeOut
    }
  }
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: ANIMATION_DURATIONS.fast, ease: EASING.easeOut }
};

export const hoverLift = {
  y: -8,
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
  transition: { duration: ANIMATION_DURATIONS.normal, ease: EASING.easeOut }
};

// Page transition variants
export const pageTransition = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: ANIMATION_DURATIONS.normal,
      ease: EASING.easeOut
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: ANIMATION_DURATIONS.fast,
      ease: EASING.easeIn
    }
  }
};

// Utility functions
export const createStaggerVariants = (staggerDelay = STAGGER_DELAYS.normal, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren
    }
  }
});

export const createFadeVariant = (direction = 'up', distance = 30) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: -distance },
    right: { x: distance }
  };

  return {
    hidden: { opacity: 0, ...directions[direction] },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { 
        duration: ANIMATION_DURATIONS.normal,
        ease: EASING.easeOut
      }
    }
  };
};

// Loading and skeleton animations
export const pulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [1, 0.8, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const rotateAnimation = {
  rotate: 360,
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "linear"
  }
};