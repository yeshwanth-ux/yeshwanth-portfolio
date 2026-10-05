export const transitions = {
  micro: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
  component: { duration: 0.48, ease: [0.16, 1, 0.3, 1] },
  section: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  cinematic: { duration: 1.3, ease: [0.19, 1, 0.22, 1] }
};

export const maskReveal = {
  hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 },
  visible: (custom = 0) => ({
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: custom * 0.12,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export const kineticLine = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
  }
};

export const staggerContainer = (staggerDelay = 0.08, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren
    }
  }
});

export const dimensionalShift = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
  }
};
