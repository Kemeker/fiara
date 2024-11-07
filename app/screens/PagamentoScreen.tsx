import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import AppBar from '../components/Appbar';
import { pagamentoStyles as styles } from '../style/screens';

export default function Pagamento({ navigation }) {
    const [qrCodeImage, setQrCodeImage] = useState<string | null>(null);
    const [codigoPix, setCodigoPix] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [pagamentoLink, setPagamentoLink] = useState<string | null>(null); // Link de pagamento Asaas, se necessário

    useEffect(() => {
        async function fetchQRCode() {
            try {
                setLoading(true);

                const response = await fetch('https://www.asaas.com/api/v3/payments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'access_token': 'SUA_CHAVE_DE_API_ASAAS', // Substitua pela sua chave de API
                    },
                    body: JSON.stringify({
                        customer: 'ID_DO_CLIENTE', // ID do cliente registrado na Asaas
                        billingType: 'PIX',
                        value: 129.90, // valor da cobrança
                        dueDate: '2024-01-10', // Defina a data de vencimento ou deixe automática
                        description: 'Pagamento de serviço Fiara',
                        externalReference: 'ID_UNICO_DO_PEDIDO',
                    }),
                });

                const data = await response.json();

                if (data?.invoiceUrl && data?.bankSlipUrl) {
                    // Armazenar o QR Code e o código Pix
                    setQrCodeImage(data.invoiceUrl); // URL do QR Code
                    setCodigoPix(data.identificationField); // Código Pix gerado
                    setPagamentoLink(data.bankSlipUrl); // Link de pagamento, se aplicável
                } else {
                    throw new Error('Falha ao gerar o QR Code');
                }
            } catch (error) {
                Alert.alert('Erro', 'Não foi possível gerar o QR Code de pagamento.');
            } finally {
                setLoading(false);
            }
        }

        fetchQRCode();
    }, []);

    const handleConfirmPayment = () => {
        Alert.alert('Pagamento', 'Aguardando confirmação do pagamento.');
        // Aqui podemos implementar a verificação do pagamento
    };

    return (
        <View style={styles.container}>
            <AppBar title="Pagamento" subtitle="Olá Ana Beatriz" />


            <View style={styles.qrCodeContainer}>
                {loading ? (
                    <ActivityIndicator size="large" color="#333" />
                ) : (
                    qrCodeImage ? (
                        <Image source={{ uri: qrCodeImage }} style={styles.qrCodeImage} />
                    ) : (
                        <Text>QR Code não disponível</Text>
                    )
                )}
            </View>

            <View style={styles.codeContainer}>
                <Text style={styles.codeLabel}>CÓDIGO PIX:</Text>
                <Text style={styles.codeValue}>{codigoPix || 'Carregando...'}</Text>
            </View>

            <View style={styles.paymentInfoContainer}>
                <Text style={styles.paymentLabel}>Valor do serviço:</Text>
                <Text style={styles.paymentValue}>R$ 129,90</Text>
            </View>

            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
                <Text style={styles.confirmButtonText}>Confirmar Pagamento</Text>
            </TouchableOpacity>
        </View>
    );
}
