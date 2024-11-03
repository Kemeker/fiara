import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ScrollView
} from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';

// componentes
import AppBar from '../components/Appbar';
import DropDown from '../components/Drop-Down';
import Calendario from '../components/Calendario'
import DataHora from '../components/DataHora';

type RootStackParamList = {
    Agendamento: { serviceId: string };
};

type AgendamentoRouteProp = RouteProp<RootStackParamList, 'Agendamento'>;




const servicos = [
    { id: '1', clientName: 'Ana Beatriz', serviceType: 'Sobrancelhas', category: 'Beleza', date: '11:00 - 12/07/2024', location: 'Rua Sete de Setembro', valor: '180 R$' },
    { id: '2', clientName: 'Joana Maria', serviceType: 'Massagem', category: 'Bem-Estar', date: '14:00 - 13/07/2024', location: 'Av. Getulio Vargas', valor: '150 R$' },
    { id: '3', clientName: 'Joana Maria', serviceType: 'Manicure', category: 'Beleza', date: '11:30 - 12/07/2024', location: 'Av. Fernando Machado', valor: '100 R$' },
];



export default function AgendamentoScreen() {
    const navigation = useNavigation();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [time, setTime] = useState(new Date());





    // funçao botao confirmar
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
            <AppBar title='Agendamento' subtitle="Olá Ana Beatriz" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Componente Drop-Down para selecionar serviços e categorias */}
                <DropDown
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    uniqueCategories={[...new Set(servicos.map((servico) => servico.category))]}
                    selectedService={selectedService}
                    setSelectedService={setSelectedService}
                    uniqueServices={[...new Set(servicos.map((servico) => servico.serviceType))]}
                />


                {/* Componente Calendario */}
                <Calendario
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate}
                />

                {/* Componente de seleção de horário */}
                <DataHora time={time} onTimeChange={setTime} />

                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmar}>
                    <Text style={styles.confirmButtonText}>Avançar para o endereço</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingTop: 24,
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