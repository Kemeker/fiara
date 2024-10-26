import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const services = [
    {
        id: '1',
        clientName: 'Ana Beatriz',
        serviceType: 'Sobrancelhas',
        date: '11:00 - 12/07/2024',
        location: 'Rua Sete de Setembro - Centro, Chapecó - SC, 89802-112 Sala 205',
    },
    {
        id: '2',
        clientName: 'Joana Maria',
        serviceType: 'Massagem',
        date: '14:00 - 13/07/2024',
        location: 'Av. Getulio Vargas - Centro, Chapecó - SC, 89802-112 Sala 205',
    },
    {
        id: '3',
        clientName: 'Joana Maria',
        serviceType: 'Manicure',
        date: '11:30 - 12/07/2024',
        location: 'Av. Fernando Machado - Centro, Chapecó - SC, 89802-112 Sala 205',
    },
];

export default function DashboardScreen() {
    const navigation = useNavigation();
    const renderServiceItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.clientName}>{item.clientName}</Text>
            <Text style={styles.serviceType}>{item.serviceType}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <TouchableOpacity
                style={styles.acceptButton}
                onPress={() => navigation.navigate('Agendamento', { serviceId: item.id })}
            >
                <Text style={styles.acceptButtonText}>ACEITAR SERVIÇO</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <MaterialIcons name="home" size={28} color="black" />
                <Text style={styles.greeting}>Olá Douglas</Text>
                <MaterialIcons name="search" size={28} color="black" />
            </View>

            <Text style={styles.title}>Solicitações</Text>

            {/* Lista de serviços */}
            <FlatList
                data={services}
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
    date: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    location: {
        fontSize: 14,
        color: '#666',
        marginBottom: 12,
    },
    acceptButton: {
        backgroundColor: '#6C63FF',
        borderRadius: 8,
        paddingVertical: 10,
        alignItems: 'center',
    },
    acceptButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
