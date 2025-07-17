import { useEffect, useRef, useState, type FC } from 'react';
import styles from './pill.module.scss';
import { clsx } from 'shared/lib/clsx';
import { useTimePeriod } from 'shared/context/timePeriodContext';
import { ITEM_SIZE } from 'shared/consts';

interface PillProps {
    /** Короткое значение в центре */
    centerLabel: string | number;
    /** Подпись рядом */
    sideLabel: string;
    /** При true будет виден sideLabel */
    isActive: boolean;
}

export const Pill: FC<PillProps> = props => {
    const { centerLabel, sideLabel, isActive } = props;
    const [isVisible, setIsVisible] = useState(isActive);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
    const { durationMs } = useTimePeriod();

    useEffect(() => {
        if (isActive && !isVisible) {
            timeoutRef.current = setTimeout(() => {
                setIsVisible(true);
            }, durationMs);
        }

        if (!isActive) {
            clearTimeout(timeoutRef.current);
            setIsVisible(false);
        }
    }, [durationMs, isActive, isVisible]);

    return (
        <div
            className={styles.pillItem}
            style={{ width: ITEM_SIZE, height: ITEM_SIZE }}
        >
            <span className={styles.centerLabel}>{centerLabel}</span>
            <span
                className={clsx(
                    styles.sideLabel,
                    isVisible ? styles.visible : styles.invisible,
                )}
            >
                {sideLabel}
            </span>
        </div>
    );
};
