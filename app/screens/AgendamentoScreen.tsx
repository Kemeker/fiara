import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RouteProp, useRoute } from '@react-navigation/native';
import AppBar from '../components/Appbar';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    Agendamento: { serviceId: string };
};

type AgendamentoRouteProp = RouteProp<RootStackParamList, 'Agendamento'>;




export default function AgendamentoScreen() {


    const navigation = useNavigation();

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [time, setTime] = useState(new Date()); // Define `time` como um objeto `Date`

    const route = useRoute<AgendamentoRouteProp>();
    const { serviceId } = route.params;

    const handleSelecionarHorario = (event: any, selectedTime?: Date) => {
        const currentTime = selectedTime || new Date();
        setShowTimePicker(false);
        setTime(currentTime);
    };

    const handleDateSelect = (day: { dateString: string }) => {
        setSelectedDate(day.dateString);
    }

    const handleConfirmar = () => {
        Alert.alert(
            'Confirmação',
            'Realmente deseja fazer essa solicitação?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Confirmar', onPress: () => navigation.navigate('ConfirmarLocalizacao') },
            ]
        );
    };

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}

            <AppBar title='Agendamento' subtitle="Olá Ana Beatriz" />





            {/* Seleção de categoria */}
            <TouchableOpacity style={styles.selectBox}>
                <Text style={styles.selectText}>Selecione uma categoria</Text>
                <MaterialIcons name="arrow-drop-down" size={24} color="black" />
            </TouchableOpacity>

            {/* Seleção de serviço */}
            <TouchableOpacity style={styles.selectBox}>
                <Text style={styles.selectText}>Selecione o serviço</Text>
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
                <Text style={styles.timeText}>
                    {time.getHours().toString().padStart(2, '0')}:{time.getMinutes().toString().padStart(2, '0')}
                </Text>
            </TouchableOpacity>
            {showTimePicker && (
                <DateTimePicker
                    value={time} // Define o valor inicial como o horário selecionado
                    mode="time"
                    is24Hour={true}
                    display="spinner"
                    onChange={handleSelecionarHorario}
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
        padding: 10,
        marginBottom: 12,
        backgroundColor: 'white',
        marginTop: 10,
    },
    selectText: {
        margin: 10,
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
        backgroundColor: '#3c2d91',
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
