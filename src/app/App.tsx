import { TimePeriodProvider } from 'shared/context/timePeriodContext';
import { HistoryDatesPage } from 'pages/historyDates';
import './styles/global.scss';

export const App = () => {
    return (
        <TimePeriodProvider>
            <HistoryDatesPage />
        </TimePeriodProvider>
    );
};
