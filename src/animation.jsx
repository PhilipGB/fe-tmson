export const hamburgerAnimation = {
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.1 },
  },
  closed: {
    opacity: 0,
    x: "-100%",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const lineOne = {
  open: {
    y: 8,
    rotate: 45,
    scale: 1.1,
    transition: { duration: 0.3 },
  },
};

export const lineTwo = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
};

export const lineThree = {
  open: {
    y: -12,
    rotate: -45,
    scale: 1.1,
    transition: { duration: 0.3 },
  },
};

export const animationLinks = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: "-100%",
    opacity: 0,
  },
};
