import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import AppBar from '../components/Appbar';
import { buscandoServicosStyles as styles } from '../style/screens';

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

