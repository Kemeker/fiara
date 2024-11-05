import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import AppBar from '../components/Appbar';
import { dashboardStyles as styles } from '../style/screens';

interface Service {
    id: string;
    clientName: string;
    serviceType: string;
    date: string;
    location: string;
}

const servicos = [
    {
        id: '1',
        clientName: 'Ana Beatriz',
        serviceType: 'Sobrancelhas',
        date: '11:00 - 12/07/2024',
        location: 'Rua Sete de Setembro - Centro, Chapecó - SC, 89802-112 Sala 205',
        valor: '180 R$',
    },
    {
        id: '2',
        clientName: 'Joana Maria',
        serviceType: 'Massagem',
        date: '14:00 - 13/07/2024',
        location: 'Av. Getulio Vargas - Centro, Chapecó - SC, 89802-112 Sala 205',
        valor: '150 R$',
    },
    {
        id: '3',
        clientName: 'Joana Maria',
        serviceType: 'Manicure',
        date: '11:30 - 12/07/2024',
        location: 'Av. Fernando Machado - Centro, Chapecó - SC, 89802-112 Sala 205',
        valor: '100 R$',
    },
];

export default function DashboardScreen() {
    const navigation = useNavigation();
    const route = useRoute()

    const renderServiceItem = ({ item }: { item: Service }) => (
        <View style={styles.card}>
            <Text style={styles.clientName}>{item.clientName}</Text>
            <Text style={styles.serviceType}>{item.serviceType}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.valor}>{item.valor} </Text>
            <Button
                mode="contained"
                onPress={() => navigation.navigate('Agendamento' as never, { serviceId: item.id } as never)}
                style={styles.acceptButton}
            >
                <Text>ACEITAR SERVIÇO</Text>
            </Button>
        </View>
    );

    return (
        <View style={styles.container}>
            <AppBar title={route.name} subtitle="Olá Ana Beatriz" />


            <FlatList
                data={servicos}
                renderItem={renderServiceItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

