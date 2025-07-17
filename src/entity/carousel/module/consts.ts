import type { NavigationOptions, PaginationOptions } from 'swiper/types';
import styles from '../ui/carousel.module.scss';

export const NEXT_EL_NAV_SELECTOR = 'swiper-button-next_CUSTOM';
export const PREV_EL_NAV_SELECTOR = 'swiper-button-prev_CUSTOM';
export const NAVIGATION_OPTIONS = {
    nextEl: `.${NEXT_EL_NAV_SELECTOR}`,
    prevEl: `.${PREV_EL_NAV_SELECTOR}`,
    disabledClass: styles.disabled,
} satisfies NavigationOptions;

export const PAGINATION_EL_SELECTOR = styles.paginationEl;
export const PAGINATION_OPTIONS = {
    el: `.${PAGINATION_EL_SELECTOR}`,
    clickable: true,
} satisfies PaginationOptions;

export const BREAKPOINTS = {
    0: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    320: {
        slidesPerView: 1.3,
        spaceBetween: 25,
    },
    480: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    992: {
        slidesPerView: 4,
        spaceBetween: 60,
    },
    1200: {
        slidesPerView: 4,
        spaceBetween: 80,
    },
};