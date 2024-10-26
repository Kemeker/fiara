import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars'; // Biblioteca para o calendário
import DateTimePicker from '@react-native-community/datetimepicker'; // Biblioteca para o horário
import { useRoute } from '@react-navigation/native';


export default function AgendamentoScreen() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [time, setTime] = useState('12:45'); // Horário inicial

    const route = useRoute();
    const { serviceId } = route.params;

    // Lida com a seleção de horário
    const handleTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowTimePicker(false);
        setTime(currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    // Lida com a seleção de data no calendário
    const handleDateSelect = (day) => {
        setSelectedDate(day.dateString);
    };

    // Mostra o modal de confirmação
    const handleConfirmar = () => {
        Alert.alert(
            'Confirmação',
            'Realmente deseja fazer essa solicitação?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Confirmar', onPress: () => console.log('Solicitação Confirmada') },
            ]
        );
    };

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <MaterialIcons name="home" size={28} color="black" />
                <Text style={styles.greeting}>Olá Douglas</Text>
                <MaterialIcons name="search" size={28} color="black" />
            </View>

            <Text style={styles.title}>Agendamento</Text>

            {/* Seleção de categoria */}
            <TouchableOpacity style={styles.selectBox}>
                <Text style={styles.selectText}>Selecione uma categoria</Text>
                <MaterialIcons name="arrow-drop-down" size={24} color="black" />
            </TouchableOpacity>

            {/* Seleção de serviço */}
            <TouchableOpacity style={styles.selectBox}>
                <Text style={styles.selectText}>Selecione o Serviço</Text>
                <MaterialIcons name="arrow-drop-down" size={24} color="black" />
            </TouchableOpacity>

            {/* Calendário para seleção de data */}
            <Calendar
                onDayPress={handleDateSelect}
                markedDates={{
                    [selectedDate]: { selected: true, selectedColor: '#6C63FF' },
                }}
                theme={{
                    selectedDayBackgroundColor: '#6C63FF',
                    todayTextColor: '#6C63FF',
                    arrowColor: '#6C63FF',
                }}
            />

            {/* Seleção de horário */}
            <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.timeInput}>
                <Text style={styles.timeText}>{time}</Text>
            </TouchableOpacity>
            {showTimePicker && (
                <DateTimePicker
                    value={new Date()}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={handleTimeChange}
                />
            )}

            {/* Botão de confirmação */}
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmar}>
                <Text style={styles.confirmButtonText}>Avançar para o endereço</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    greeting: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    selectBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        backgroundColor: 'white',
    },
    selectText: {
        fontSize: 16,
        color: '#333',
    },
    timeInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginTop: 12,
        marginBottom: 24,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    timeText: {
        fontSize: 16,
        color: '#333',
    },
    confirmButton: {
        backgroundColor: '#6C63FF',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
