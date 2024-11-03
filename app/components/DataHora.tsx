// components/DataHora.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DataHoraProps {
    time: Date;
    onTimeChange: (time: Date) => void;
}

const DataHora: React.FC<DataHoraProps> = ({ time, onTimeChange }) => {
    const [showTimePicker, setShowTimePicker] = useState(false);

    const handleSelecionarHorario = (event: any, selectedTime?: Date) => {
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
            {showTimePicker && (
                <DateTimePicker
                    value={time}
                    mode="time"
                    is24Hour={true}
                    display="spinner"
                    onChange={handleSelecionarHorario}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    timeInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 14,
        marginTop: 12,
        marginBottom: 24,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    timeText: {
        fontSize: 16,
        color: '#333',
    },
});

export default DataHora;
