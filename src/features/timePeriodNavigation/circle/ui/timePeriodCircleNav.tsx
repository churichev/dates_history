import { useTimePeriod } from 'shared/context/timePeriodContext';
import { getRotationOffset } from 'shared/lib/styles';
import { CarouselCircleNav } from 'entity/carouselNavigation';
import { FC } from 'react';

interface TimePeriodCircleProps {
    /** Дополнительная стилизация */
    className?: string;
}

export const TimePeriodCircleNav: FC<TimePeriodCircleProps> = props => {
    const { className } = props;
    const {
        activePeriodID,
        selectPeriodID,
        periods,
        totalCount,
    } = useTimePeriod();
    const deg = getRotationOffset(activePeriodID, totalCount);

    return (
        <CarouselCircleNav
            deg={deg}
            onSelect={selectPeriodID}
            items={periods}
            className={className}
        />
    );
};
