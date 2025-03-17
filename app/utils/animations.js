// Shared animation constants for consistent motion effects across the website

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6 }
};

export const slideUp = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export const slideDown = {
  initial: { y: -30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export const scaleIn = {
  initial: { scale: 0 },
  whileInView: { scale: 1 },
  transition: { duration: 0.8, type: 'spring', stiffness: 100 }
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
  initial: {},
  whileInView: {},
  viewport: { once: false, amount: 0.25 },
  transition: {
    staggerChildren,
    delayChildren
  }
});
