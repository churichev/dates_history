import { useContext } from 'react';
import { TimePeriodContext } from './timePeriodContext';

export const useTimePeriod = () => {
    const context = useContext(TimePeriodContext);
    if (!context) {
        throw new Error('Хук useTimePeriod должен быть использован внутри TimePeriodProvider')
    }
    return context;
};
