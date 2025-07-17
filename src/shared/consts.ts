export const FULL_CIRCLE_DEGREES = 360;

const isFull = window.innerWidth > 1200;
export const CIRCLE_DIAMETER = isFull ? 530 : 400;
export const ITEM_SIZE = isFull ? 56: 40;
export const RADIUS = CIRCLE_DIAMETER / 2;

export const START_POSITION = 1;
export const OFFSET_ANGLE = -30;

export const BASE_DURATION_MS = 1_000;