import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button, Card } from 'react-native-paper';
import AppBar from '../components/Appbar';


interface Atendimento {
    id: string;
    clientName: string;
    serviceType: string;
    date: string;
    location: string;
    status: 'Aceito' | 'Concluído';
}

const atendimentos: Atendimento[] = [
    {
        id: '1',
        clientName: 'Ana Beatriz',
        serviceType: 'Unha',
        date: '11:00 - 12/07/2024',
        location: 'Av. Fernando Machado - Centro, Chapecó - SC, 89802-112 Sala 205',
        status: 'Aceito',
    },
    {
        id: '2',
        clientName: 'Joana Maria',
        serviceType: 'Massagem',
        date: '14:00 - 13/07/2024',
        location: 'Av. Fernando Machado - Centro, Chapecó - SC, 89802-112 Sala 205',
        status: 'Aceito',
    },
    {
        id: '3',
        clientName: 'Joana Maria',
        serviceType: 'Unha',
        date: '11:10 - 10/07/2024',
        location: 'Av. Fernando Machado - Centro, Chapecó - SC, 89802-112 Sala 205',
        status: 'Concluído',
    },
];

export default function MeusAtendimentosScreen() {
    const renderAtendimentoItem = ({ item }: { item: Atendimento }) => (
        <Card style={styles.card}>
            <Card.Content>
                <Text style={styles.clientName}>{item.clientName}</Text>
                <Text style={styles.serviceType}>{item.serviceType}</Text>
                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={item.status === 'Aceito' ? styles.statusAceito : styles.statusConcluido}>
                    {item.status}
                </Text>
            </Card.Content>
        </Card>
    );

    return (
        <View style={styles.container}>
            <AppBar title="Meus Atendimentos" subtitle="Olá Ana Beatriz" />


            <FlatList
                data={atendimentos}
                renderItem={renderAtendimentoItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9b93c9',
        paddingHorizontal: 16,
        paddingTop: 24,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
        color: '#333',
    },
    list: {
        paddingBottom: 16,
    },
    card: {
        marginBottom: 16,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
    },
    clientName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 4,
    },
    serviceType: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 8,
    },
    date: {
        fontSize: 14,
        color: 'red',
        fontStyle: 'italic',
        marginBottom: 4,
    },
    location: {
        fontSize: 14,
        color: 'white',
        marginBottom: 12,
    },
    statusAceito: {
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    statusConcluido: {
        color: '#9b8bf7',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
