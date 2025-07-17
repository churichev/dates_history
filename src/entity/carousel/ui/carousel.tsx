import { useMemo, type FC, type JSX } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import {
    BREAKPOINTS,
    NAVIGATION_OPTIONS,
    NEXT_EL_NAV_SELECTOR,
    PAGINATION_EL_SELECTOR,
    PAGINATION_OPTIONS,
    PREV_EL_NAV_SELECTOR,
} from '../module/consts';
import ArrowRightIcon from 'shared/assets/icons/arrow-right-icon.svg';

import { clsx } from 'shared/lib/clsx';
import styles from './carousel.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps {
    /** Список элементов для рендера. */
    elements: JSX.Element[];
}

export const Carousel: FC<CarouselProps> = props => {
    const { elements } = props;

    const renderedItems = useMemo(() => {
        return elements.map((Element, i) => {
            return <SwiperSlide key={i}>{Element}</SwiperSlide>;
        });
    }, [elements]);

    return (
        <div className={styles.carousel}>
            <button
                className={clsx(styles.navigationButton, PREV_EL_NAV_SELECTOR)}
            >
                <ArrowRightIcon stroke="#3877EE" strokeWidth="2" />
            </button>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={NAVIGATION_OPTIONS}
                pagination={PAGINATION_OPTIONS}
                breakpoints={BREAKPOINTS}
            >
                {renderedItems}
            </Swiper>
            <div className={PAGINATION_EL_SELECTOR} />
            <button
                className={clsx(
                    styles.navigationButton,
                    NEXT_EL_NAV_SELECTOR,
                    styles.rotate,
                )}
            >
                <ArrowRightIcon stroke="#3877EE" strokeWidth="2" />
            </button>
        </div>
    );
};