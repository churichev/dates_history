export type EasingType = 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';
export type EasingFunctionsMap = Record<EasingType, (t: number) => number>;
