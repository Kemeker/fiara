import React from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import AppBar from '../components/Appbar';
import { useNavigation } from '@react-navigation/native';
import { localizacaoStyles as styles } from '../style/screens'

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

