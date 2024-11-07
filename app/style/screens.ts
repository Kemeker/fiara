import { StyleSheet } from 'react-native';


{/* Style tela de login */ }

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 32,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    logo: {
        width: 275,
        height: 140,
        marginBottom: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 16,
    },
    input: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 12,
        paddingLeft: 16,
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    eyeIcon: {
        padding: 10,
        marginRight: 4,
    },
    loginButton: {
        backgroundColor: '#5810e8',
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 16,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPasswordText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 24,
    },
    registerText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
    registerLink: {
        color: '#FFD700',
        fontWeight: 'bold',
    },
});

{/* Style tela de Agendamento*/ }
export const agendamentoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    confirmButton: {
        backgroundColor: '#3c2d91',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

// Style tela de Confirmaçao de localizaçao
export const localizacaoStyles = StyleSheet.create({
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
        backgroundColor: '#3c2d91',
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

// tela de style buscando serviços

export const buscandoServicosStyles = StyleSheet.create({
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


// style da tela MeusAtendimentos
export const atendimentoStyles = StyleSheet.create({
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
        color: 'black',
        marginBottom: 4,
    },
    serviceType: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
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
        color: 'black',
        marginBottom: 12,
    },
    statusAceito: {
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    statusConcluido: {
        color: '#3c2d91',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

// styles da tela dashboard 

export const dashboardStyles = StyleSheet.create({
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

// styles da tela de cadastro
export const CadastroStyles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 32,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    logo: {
        width: 275,
        height: 140,
        marginBottom: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 16,
    },
    input: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 12,
        paddingLeft: 16,
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    eyeIcon: {
        padding: 10,
        marginRight: 4,
    },
    loginButton: {
        backgroundColor: '#5810e8',
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 16,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPasswordText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 24,
    },
    registerText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
    registerLink: {
        color: '#FFD700',
        fontWeight: 'bold',
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    termsText: {
        color: 'white',
        fontSize: 14,
        marginRight: 8,
    },
});

// style da tela de aguardando pagamento
export const aguardandoPagamentoStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
    },
    profileDetails: {
        flex: 1,
    },
    serviceType: {
        fontSize: 14,
        color: '#888',
        marginBottom: 4,
    },
    professionalName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    professionalDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    mapImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 16,
    },
    addressContainer: {
        marginTop: 10,
    },
    dateLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    dateValue: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    addressLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    addressValue: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginBottom: 20,
    },
    priceLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    priceValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    paymentButton: {
        backgroundColor: '#3c2d91',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
    },
    paymentButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

// style da tela de pagamento
export const pagamentoStyles = StyleSheet.create({
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
    qrCodeContainer: {
        alignItems: 'center',
        marginBottom: 16,
        padding: 20,
        backgroundColor: '#ddd',
        borderRadius: 8,
    },
    qrCodeImage: {
        width: 200,
        height: 200,
    },
    codeContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    codeLabel: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    codeValue: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
    },
    paymentInfoContainer: {
        borderWidth: 1,
        borderColor: '#333',
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
    },
    paymentLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    paymentValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    confirmButton: {
        backgroundColor: '#3c2d91',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 20,
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});