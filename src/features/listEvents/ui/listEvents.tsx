import { Suspense, useMemo } from 'react';
import { useTimePeriod } from 'shared/context/timePeriodContext';
import { Carousel } from 'entity/carousel';
import styles from './listEvents.module.scss';

export const ListEvents = () => {
    const { periods, activePeriodID } = useTimePeriod();
    const events = useMemo(() => {
        return periods[activePeriodID - 1].events.map(
            ({ description, year }) => (
                <div
                    className={styles.event}
                    key={year}
                >
                    <span className={styles.year}>{year}</span>
                    <p className={styles.description}>{description}</p>
                </div>
            ),
        );
    }, [activePeriodID, periods]);

    return <Carousel elements={events} key={activePeriodID} />;
};
