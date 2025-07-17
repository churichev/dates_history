import { DatesTransition } from 'features/datesTransition';
import {
    TimePeriodButtonNav,
    TimePeriodCircleNav,
} from 'features/timePeriodNavigation';
import { ListEvents } from 'features/listEvents';
import styles from './historyDatesPage.module.scss';

export const HistoryDatesPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    Исторические <br />
                    даты
                </h2>
                <DatesTransition className={styles.datesTransition} />
                <TimePeriodCircleNav className={styles.timePeriodCircleNav} />
                <TimePeriodButtonNav className={styles.timePeriodButtonNav} />
            </div>
            <ListEvents />
        </div>
    );
};
