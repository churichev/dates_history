import type { TimelineEvent } from 'shared/context/timePeriodContext';

/**
 * Возвращает минимальный и максимальный год из массива событий.
 * @param events - Массив событий с полем year.
 * @returns Объект с `from` (минимальный год) и `to` (максимальный год).
 */
export function getTimelineBounds(events: TimelineEvent[]) {
    if (events.length === 0) {
        return { from: null, to: null };
    }

    const years = events.map(event => event.year);
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);

    return { from: minYear, to: maxYear };
}
