import { EasingFunctionsMap } from './types';

export const EASING_FUNCTIONS: EasingFunctionsMap = {
    linear: (t: number) => t,
    easeIn: (t: number) => t * t,
    easeOut: (t: number) => t * (2 - t),
    easeInOut: (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2),
};
