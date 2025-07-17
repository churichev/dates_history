import { createContext } from 'react';
import { BASE_DURATION_MS } from 'shared/consts';

export type TimelineEvent = {
    /** Год, в котором произошло событие. */
    readonly year: number;
    /** Описание события. */
    readonly description: string;
};

export type TimePeriod = {
    /** Характеризующее название временного периода. */
    readonly title: string;
    /** Список событий. */
    readonly events: TimelineEvent[];
    /** Числовой идентификатор */
    readonly id: number;
};

export type TimePeriodContextType = {
    /** Идентификатор выбранного периода. */
    readonly activePeriodID: number;
    /** Идентификатор предыдущего активного периода. */
    readonly prevPeriodID: number;
    /** Количество временных периодов */
    readonly totalCount: number;
    /** Функция для установки индекса активного периода. */
    readonly selectPeriodID: (index: number) => void;
    /** Список временных периодов. */
    readonly periods: TimePeriod[];
    /** Время выполнения анимации. */
    readonly durationMs: number;
};

export const TimePeriodContext = createContext<TimePeriodContextType>({
    activePeriodID: 1,
    prevPeriodID: 1,
    selectPeriodID: () => {},
    durationMs: BASE_DURATION_MS,
    periods: [],
    totalCount: 0,
});
