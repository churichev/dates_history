import { type FC, useEffect, useRef, useState } from 'react';
import type { EasingType } from '../model/types';
import { EASING_FUNCTIONS } from '../model/consts';

interface NumberTransitionProps {
    /**
     * Начальное значение числа до начала анимации.
     */
    from: number;

    /**
     * Конечное значение числа, к которому будет выполнен плавный переход.
     */
    to: number;

    /**
     * Длительность анимации в миллисекундах.
     * @default 1000
     */
    duration?: number;

    /**
     * Функция сглаживания (easing), определяющая характер анимации.
     * @default "easeInOut"
     */
    easing?: EasingType;
    /** 
     * Дополнительная стилизация 
     */
    className?: string;
}

export const NumberTransition: FC<NumberTransitionProps> = props => {
    const { from, to, duration = 1000, easing = 'easeOut', className } = props;

    const [value, setValue] = useState(from);
    const frame = useRef<number | null>(null);

    useEffect(() => {
        let start: number | null = null;

        const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const easedProgress = EASING_FUNCTIONS[easing](progress);
            const currentValue = from + (to - from) * easedProgress;

            setValue(currentValue);

            if (progress < 1) {
                frame.current = requestAnimationFrame(animate);
            }
        };

        frame.current = requestAnimationFrame(animate);

        return () => {
            if (frame.current !== null) {
                cancelAnimationFrame(frame.current);
            }
        };
    }, [from, to, duration, easing]);

    return <span className={className}>{Math.round(value)}</span>;
};
