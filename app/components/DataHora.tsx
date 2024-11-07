// components/DataHora.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { DataHoraStyles as styles } from '../style/components';

interface DataHoraProps {
    time: Date;
    onTimeChange: (time: Date) => void;
}

const DataHora: React.FC<DataHoraProps> = ({ time, onTimeChange }) => {
    const [showTimePicker, setShowTimePicker] = useState(false);

    // Função para lidar com a seleção de horário
    const handleSelecionarHorario = (selectedTime?: Date) => {
        const currentTime = selectedTime || time;
        setShowTimePicker(false);
        onTimeChange(currentTime);
    };

    return (
        <View>
            {/* Botão para seleção de horário */}
            <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.timeInput}>
                <Text style={styles.timeText}>
                    {time.getHours().toString().padStart(2, '0')}:{time.getMinutes().toString().padStart(2, '0')}
                </Text>
            </TouchableOpacity>

            {/* Modal do DateTimePicker */}
            <DateTimePickerModal
                isVisible={showTimePicker}
                mode="time"
                date={time}
                is24Hour={true}
                onConfirm={handleSelecionarHorario}
                onCancel={() => setShowTimePicker(false)}
            />
        </View>
    );
};

export default DataHora;;
