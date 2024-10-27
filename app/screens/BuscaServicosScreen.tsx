import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import AppBar from '../components/Appbar';

export default function BuscaServicosScreen({ navigation }) {
    const handleCancel = () => {
        // Lógica para cancelar a solicitação e retornar ao Dashboard
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <AppBar title="Fiara" subtitle="Olá Ana Beatriz" />
            <Text style={styles.title}>Buscando nossas estrelas</Text>

            {/* Simulação de carregamento */}
            <View style={styles.animationContainer}>
                <ActivityIndicator size="large" color="white" />
            </View>

            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                <Text style={styles.cancelButtonText}>Cancelar solicitação</Text>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
        color: '#333',
    },
    animationContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
        paddingVertical: 100,
        backgroundColor: '#bdb3f5',
        borderRadius: 8,
    },
    cancelButton: {
        backgroundColor: '#3c2d91',
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 24,
        marginTop: 10,
    },
    cancelButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
