// Framer Motion Variants

import { Variants } from "framer-motion";

// Fade Variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeOut: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 0 },
};

// Slide Variants
export const slideUp: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const slideDown: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const slideLeft: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const slideRight: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

// Scale Variants
export const scaleUp: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export const scaleDown: Variants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

// Rotate Variants
export const rotateIn: Variants = {
  hidden: { rotate: -180, opacity: 0 },
  visible: { rotate: 0, opacity: 1 },
};

export const rotateOut: Variants = {
  hidden: { rotate: 0, opacity: 1 },
  visible: { rotate: 180, opacity: 0 },
};

// Bounce Variants
export const bounceIn: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};

// Stagger Variants for Parent Containers
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Item Variants for Staggered Children
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Fade and Slide Combined
export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Responsive Variants
export const responsive: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};
