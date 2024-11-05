import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import AppBar from '../components/Appbar';
import { atendimentoStyles as styles } from '../style/screens';



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
            <AppBar title="Atendimentos" subtitle="Olá Ana Beatriz" />


            <FlatList
                data={atendimentos}
                renderItem={renderAtendimentoItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

