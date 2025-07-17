import type { FC } from 'react';
import { useTimePeriod } from 'shared/context/timePeriodContext';
import { getTimelineBounds } from 'shared/lib/getTimelineBounds';
import { NumberTransition } from 'entity/numberTransition';
import { clsx } from 'shared/lib/clsx';
import styles from './datesTransition.module.scss';

interface DatesTransitionProps {
    /** Дополнительная стилизация */
    className?: string;
}

export const DatesTransition: FC<DatesTransitionProps> = props => {
    const { className } = props;
    const {
        activePeriodID,
        prevPeriodID,
        periods,
        durationMs,
    } = useTimePeriod();

    const prevYears = getTimelineBounds(periods[prevPeriodID - 1].events);
    const curYears = getTimelineBounds(periods[activePeriodID - 1].events);

    if (
        !prevYears.from ||
        !curYears.from ||
        !prevYears.to ||
        !curYears.to
    ) {
        return null;
    }
    return (
        <div className={clsx(styles.numbersTransitionWrap, className)}>
            <NumberTransition
                from={prevYears.from}
                to={curYears.from}
                duration={durationMs}
                easing="easeInOut"
                className={clsx(
                    styles.numberTransition,
                    styles.numberTransitionLeft,
                )}
            />
            <NumberTransition
                from={prevYears.to}
                to={curYears.to}
                duration={durationMs}
                easing="easeInOut"
                className={clsx(
                    styles.numberTransition,
                    styles.numberTransitionRight,
                )}
            />
        </div>
    );
};
