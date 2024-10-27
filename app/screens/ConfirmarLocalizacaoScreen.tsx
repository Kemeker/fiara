import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import AppBar from '../components/Appbar';
import { useNavigation } from '@react-navigation/native';

export default function ConfirmarLocalizacaoScreen() {
    const navigation = useNavigation();

    const handleConfirmarLocalizacao = () => {
        Alert.alert(
            'Confirmação',
            'Esse é o local de atendimento?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Confirmar', onPress: () => navigation.navigate('BuscaServicos') },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <AppBar title="Confirmar localização" subtitle="Olá Ana Beatriz" />

            <View style={styles.mapContainer}>
                <Image
                    source={require('../assets/images/mapa.png')}
                    style={styles.map}
                    resizeMode="cover"
                />
            </View>

            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmarLocalizacao}>
                <Text style={styles.confirmButtonText}>Confirmar</Text>
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
    mapContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    map: {
        width: '100%',
        height: 400,
        borderRadius: 8,
    },
    confirmButton: {
        backgroundColor: '#6C63FF',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 20,
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
