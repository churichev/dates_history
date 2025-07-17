import { ITEM_SIZE, RADIUS } from 'shared/consts';

/**
 * Вычисляет координаты (x, y) для равномерного размещения элемента на окружности.
 *
 * @param index - Индекс текущего элемента (начиная с 0).
 * @param totalItems - Общее количество элементов на окружности.
 * @returns Объект с координатами `{ x: number, y: number }`.
 */
export const getCoordinates = (
    index: number,
    totalItems: number,
): Coordinates => {
    const radian = index * ((2 * Math.PI) / totalItems) - 0.5 * Math.PI;

    const x = RADIUS * Math.cos(radian) - ITEM_SIZE / 2;
    const y = RADIUS * Math.sin(radian) - ITEM_SIZE / 2;

    return { x, y };
};
type Coordinates = { x: number; y: number };
