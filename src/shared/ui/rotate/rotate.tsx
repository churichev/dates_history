import type { FC, ReactNode } from 'react';
import { useTimePeriod } from 'shared/context/timePeriodContext';

interface RotateProps {
    /** Дочерние сущности */
    readonly children: ReactNode;
    /** Угол поворота */
    readonly deg: number;
    /** Дополнительная стилизация */
    className?: string;
}

export const Rotate: FC<RotateProps> = props => {
    const { children, deg, className } = props;
    const { durationMs } = useTimePeriod();

    return (
        <div
            className={className}
            style={{
                transform: `rotate(${deg}deg)`,
                transition: `all ${durationMs}ms ease-in-out`,
                height: 'fit-content',
                width: 'fit-content',
                borderRadius: '50%',
            }}
        >
            {children}
        </div>
    );
};
