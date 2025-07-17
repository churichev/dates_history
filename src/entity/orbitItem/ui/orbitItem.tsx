import { FC } from 'react';
import { useTimePeriod } from 'shared/context/timePeriodContext';
import { getRotationOffset, getCoordinates } from 'shared/lib/styles';
import { Pill } from 'shared/ui/pill';
import { Position } from 'shared/ui/position';
import { Rotate } from 'shared/ui/rotate';
import { Scale } from 'shared/ui/scale';

interface OrbitItemProps {
    /** Индекс текущего элемента */
    index: number;
    /** Короткое значение в центре */
    centerLabel: string | number;
    /** Подпись справа от кружка */
    sideLabel: string;
}

export const OrbitItem: FC<OrbitItemProps> = props => {
    const { index, centerLabel, sideLabel } = props;
    const { totalCount, activePeriodID } = useTimePeriod();
    const deg = getRotationOffset(activePeriodID, totalCount);
    const { x, y } = getCoordinates(index, totalCount);
    const isActive = activePeriodID === index;

    return (
        <Position
            x={x}
            y={y}
        >
            <Scale compressed={!isActive}>
                <Rotate deg={-deg}>
                    <Pill
                        centerLabel={centerLabel}
                        sideLabel={sideLabel}
                        isActive={isActive}
                    />
                </Rotate>
            </Scale>
        </Position>
    );
};
