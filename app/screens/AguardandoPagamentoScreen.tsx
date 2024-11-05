import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { aguardandoPagamentoStyles as styles } from '../style/screens';
import AppBar from '../components/Appbar';




export default function AguardandoPagamentoScreen() {
    const navigation = useNavigation();

    const handlePayment = () => {
        // Função para processar o pagamento
        alert("Processando pagamento...");
    };

    return (
        <LinearGradient colors={['#f5f5f5', '#e1e1f5']} style={styles.container}>
            <AppBar title="Pagamento" subtitle="Olá Ana Beatriz" />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Informações do profissional */}
                <View style={styles.card}>
                    <View style={styles.profileContainer}>
                        <Image
                            source={{ uri: 'https://via.placeholder.com/150' }}
                            style={styles.profileImage}
                        />
                        <View style={styles.profileDetails}>
                            <Text style={styles.serviceType}>Manicure - 233 atendimentos</Text>
                            <Text style={styles.professionalName}>Ana Beatriz</Text>
                            <Text style={styles.professionalDescription}>
                                Meu propósito é cuidar das mãos e unhas dos meus clientes, deixando-as bonitas e saudáveis.
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Mapa e Endereço */}
                <View style={styles.card}>
                    <Image
                        source={require('../assets/images/mapa.png')}
                        style={styles.mapImage}
                    />
                    <View style={styles.addressContainer}>
                        <Text style={styles.dateLabel}>Data e Hora</Text>
                        <Text style={styles.dateValue}>10/01/2024 - 12:45</Text>
                        <Text style={styles.addressLabel}>Endereço</Text>
                        <Text style={styles.addressValue}>Av Getulio Vargas Nº 155 AP 203</Text>
                    </View>
                </View>

                {/* Valor do serviço */}
                <View style={styles.priceContainer}>
                    <Text style={styles.priceLabel}>Valor do serviço:</Text>
                    <Text style={styles.priceValue}>R$ 180,00</Text>
                </View>

                {/* Botão de pagamento */}
                <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
                    <Text style={styles.paymentButtonText}>Pagar</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
}
