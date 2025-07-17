import { FC, ReactNode } from 'react';

interface PositionProps {
    /** Позиция по оси X */
    x: number;
    /** Позиция по оси Y */
    y: number;
    /** Дочерние сущности */
    children: ReactNode;
}

export const Position: FC<PositionProps> = props => {
    const { children, x, y } = props;

    return (
        <div
            style={{
                position: 'absolute',
                left: x,
                top: y,
            }}
        >
            {children}
        </div>
    );
};
