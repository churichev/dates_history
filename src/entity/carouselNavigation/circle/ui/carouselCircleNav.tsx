import { type FC, useMemo } from 'react';

import { CIRCLE_DIAMETER, RADIUS } from 'shared/consts';
import { OrbitItem } from 'entity/orbitItem';
import { Rotate } from 'shared/ui/rotate';

import styles from './carouselCircleNav.module.scss';

interface Item {
    /** Уникальный идентификатор элемента. */
    id: number;
    /** Название или заголовок элемента, отображаемый пользователю. */
    title: string;
}

interface CarouselCircleNavProps {
    /** Угол поворота круга в градусах. */
    deg: number;
    /** Массив элементов, которые будут отображены по кругу. */
    items: Item[];
    /** Обработчик выбора элемента, вызывается при клике на элемент. */
    onSelect: (id: number) => void;
    className?: string;
}

export const CarouselCircleNav: FC<CarouselCircleNavProps> = props => {
    const { deg, items, onSelect, className } = props;
    const centerStyle = useMemo(() => ({ margin: RADIUS }), []);
    const circleStyle = useMemo(
        () => ({ width: CIRCLE_DIAMETER, height: CIRCLE_DIAMETER }),
        [],
    );

    const renderedOrbits = useMemo(() => {
        return items.map(({ id, title }) => (
            <button
                key={id}
                onClick={() => onSelect(id)}
                aria-label={`Перейти к разделу ${id}: ${title}`}
            >
                <OrbitItem
                    centerLabel={id}
                    index={id}
                    sideLabel={title}
                />
            </button>
        ));
    }, [onSelect, items]);

    return (
        <Rotate deg={deg} className={className}>
            <div
                className={styles.circle}
                style={circleStyle}
            >
                <div
                    className={styles.center}
                    style={centerStyle}
                >
                    {renderedOrbits}
                </div>
            </div>
        </Rotate>
    );
};

