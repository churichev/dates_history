import type { FC } from 'react';
import { formatPagination } from '../model/formatPagination';
import ArrowRightIcon from 'shared/assets/icons/arrow-right-icon.svg';
import styles from './carouselButtonsNav.module.scss';
import { clsx } from 'shared/lib/clsx';

interface CarouselButtonsNavProps {
    /** Текущий шаг */
    currentStep: number;
    /** Общее количество шагов */
    totalSteps: number;
    /** Обработчик перехода к предыдущему шагу */
    onPrev: () => void;
    /** Обработчик перехода к следующему шагу */
    onNext: () => void;
    /** Дополнительная стилизация */
    className?: string;
}

export const CarouselButtonsNav: FC<CarouselButtonsNavProps> = props => {
    const { currentStep, totalSteps, onPrev, onNext, className } = props;
    const isAtStart = currentStep === 1;
    const isAtEnd = currentStep === totalSteps;

    return (
        <div className={clsx(styles.navigation, className)}>
            <span className={styles.indicator}>
                {formatPagination(currentStep, totalSteps)}
            </span>
            <div className={styles.controls}>
                <button
                    className={clsx(styles.controlButton, isAtStart && styles.controlButtonDisabled)}
                    onClick={onPrev}
                    disabled={isAtStart}
                    aria-label="Предыдущий шаг"
                >
                    <ArrowRightIcon
                        stroke="#42567A"
                        strokeWidth={2}
                    />
                </button>
                <button
                    className={clsx(styles.controlButton, isAtEnd && styles.controlButtonDisabled)}
                    onClick={onNext}
                    disabled={isAtEnd}
                    aria-label="Следующий шаг"
                >
                    <ArrowRightIcon
                        stroke="#42567A"
                        strokeWidth={2}
                        className={styles.iconFlipped}
                    />
                </button>
            </div>
        </div>
    );
};
