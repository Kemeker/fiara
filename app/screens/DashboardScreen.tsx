import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AppBar from '../components/Appbar';

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
            <AppBar title="Fiara" subtitle="Olá Ana Beatriz" />
            <Text style={styles.title}>Solicitações</Text>

            <FlatList
                data={servicos}
                renderItem={renderServiceItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
    },
    list: {
        paddingBottom: 16,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    clientName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 4,
    },
    serviceType: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    acceptButton: {
        marginTop: 8,
        backgroundColor: '#9b8bf7',
    },
    date: {
        fontSize: 14,
        color: '#888',
        fontStyle: 'italic',
        marginBottom: 4,
    },
    location: {
        fontSize: 14,
        color: '#888',
        marginBottom: 12,
        paddingLeft: 4,
        lineHeight: 18,
    },
    valor: {
        fontSize: 16,
    }
});
