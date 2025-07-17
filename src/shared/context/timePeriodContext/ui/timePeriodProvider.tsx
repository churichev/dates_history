import { FC, ReactNode, useCallback, useMemo, useState } from 'react';
import {
    type TimePeriodContextType,
    TimePeriodContext,
} from '../lib/timePeriodContext';
import { PERIODS } from './db';
import { BASE_DURATION_MS } from 'shared/consts';
import { slowGrowth } from 'shared/lib/slowGrowth';

export const TimePeriodProvider: FC<{
    children: ReactNode;
}> = ({ children }) => {
    const [activeID, setActiveID] =
        useState<TimePeriodContextType['activePeriodID']>(1);
    const [prevID, setPrevID] = useState(1);

    const selectPeriodID = useCallback(
        function (id: number) {
            setActiveID(id);
            setPrevID(activeID);
        },
        [activeID],
    );

    const diff = Math.abs(activeID - prevID) || 1;
    const durationMs = diff * BASE_DURATION_MS;
    const slowDurationMs = slowGrowth(durationMs / 1_000) * 1_000 

    const defaultProps = useMemo<TimePeriodContextType>(
        () => ({
            activePeriodID: activeID,
            prevPeriodID: prevID,
            periods: PERIODS,
            selectPeriodID,
            totalCount: PERIODS.length,
            durationMs: slowDurationMs,
        }),
        [activeID,prevID, durationMs, selectPeriodID],
    );

    return (
        <TimePeriodContext value={defaultProps}>{children}</TimePeriodContext>
    );
};
