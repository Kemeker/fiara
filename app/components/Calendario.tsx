// components/CustomCalendar.tsx
import React from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

// Configurar o calendário para português
LocaleConfig.locales['pt'] = {
    monthNames: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt';

interface CustomCalendarProps {
    selectedDate: string;
    onDateChange: (date: string) => void;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ selectedDate, onDateChange }) => {
    return (
        <Calendar
            onDayPress={(day) => onDateChange(day.dateString)}
            markedDates={{
                [selectedDate]: { selected: true, selectedColor: '#6C63FF' },
            }}
            theme={{
                selectedDayBackgroundColor: '#6C63FF',
                todayTextColor: '#6C63FF',
                arrowColor: '#6C63FF',
            }}
        />
    );
};

export default CustomCalendar;
