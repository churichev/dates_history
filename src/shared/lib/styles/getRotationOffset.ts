import { START_POSITION, OFFSET_ANGLE } from 'shared/consts';

/**
 * Возвращает угол поворота (в радианах) для активного элемента в круговом расположении
 * @param activeID - Идентификатор активного элемента (начиная с 1)
 * @param totalItems - Общее количество элементов
 * @returns Угол поворота в радианах
 */
export const getRotationOffset = (
    activeID: number,
    totalItems: number,
): number => {
    return 360 - (activeID - START_POSITION) * (360 / totalItems) + OFFSET_ANGLE;
};
