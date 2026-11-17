/**
 * Central Motion Configuration for Warraich Goods Transport Company.
 * Set any single flag to `false` to disable that specific animation site-wide.
 */
export const MOTION_CONFIG = {
  scrollReveal: true,
  countUp: true,
  heroParallax: true,
  heroRoadAndTruck: true,
  heroFloatingCta: true,
  tiltCards: true,
  navbarScrollAndUnderline: true,
  languageTransition: true,
  pageTransitions: true,
  routeTrackTruck: true,
  numberRoll: true,
  biltyShakeAndDraw: true,
  faqAccordion: true,
  trustCarousel: true,
  footerAndFabMotion: true,
  scrollProgressBar: true,
  buttonMicroInteractions: true,
} as const;

export type MotionFeatureKey = keyof typeof MOTION_CONFIG;
