import { CarouselButtonsNav } from 'entity/carouselNavigation';
import { FC } from 'react';
import { useTimePeriod } from 'shared/context/timePeriodContext';

interface TimePeriodButtonNavProps {
    /** Дополнительная стилизация */
    className?: string;
}

export const TimePeriodButtonNav: FC<TimePeriodButtonNavProps> = props => {
    const { className } = props;
    const { activePeriodID, totalCount, selectPeriodID } = useTimePeriod();

    return (
        <CarouselButtonsNav
            className={className}
            currentStep={activePeriodID}
            totalSteps={totalCount}
            onNext={() => selectPeriodID(activePeriodID + 1)}
            onPrev={() => selectPeriodID(activePeriodID - 1)}
        />
    );
};
