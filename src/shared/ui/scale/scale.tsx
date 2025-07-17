import { FC, ReactNode } from 'react';
import { clsx } from 'shared/lib/clsx';
import styles from './scale.module.scss';

interface ScaleProps {
    /** Если true то children сжат */
    compressed?: boolean;
    /** Дочерние сущности */
    children: ReactNode;
}

export const Scale: FC<ScaleProps> = props => {
    const { children, compressed } = props;

    return (
        <div className={clsx(styles.scale, compressed && styles.compressed)}>
            <div className={clsx(styles.background, compressed && styles.backgroundVisible)} />
            {children}
        </div>
    );
};
