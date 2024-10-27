import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import f from '../assets/images/f.png'

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isPasswordVisible, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!isPasswordVisible);
    };

    const navigation = useNavigation();

    const validateEmail = (input: string) => {
        // Expressão regular para validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
    };

    const handleLogin = () => {
        //navegaçao temporaria sem fazer login 
        navigation.navigate('Dashboard');
        let valid = true;

        // Validação do email
        if (!validateEmail(email)) {
            setEmailError('Por favor, insira um email válido');
            valid = false;
        } else {
            setEmailError('');
        }

        // Validação da senha
        if (password.length < 6) {
            setPasswordError('A senha deve ter pelo menos 6 caracteres');
            valid = false;
        } else {
            setPasswordError('');
        }

        // Se for válido, prossiga com a autenticação
        if (valid) {
            // Lógica de autenticação
            // Aqui você faria uma chamada à API para autenticar o usuário
            Alert.alert('Login bem-sucedido', `Bem-vindo, ${email}!`);
        }
    };

    return (
        <LinearGradient colors={['#3c2d91', '#8f94fb']} style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={f} style={styles.logo} />
                <Text style={styles.title}>Fiara</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor="#888"
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={!isPasswordVisible}
                        placeholderTextColor="#888"
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                        <MaterialIcons
                            name={isPasswordVisible ? 'visibility' : 'visibility-off'}
                            size={24}
                            color="#888"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.registerText}>Não tem uma conta? <Text style={styles.registerLink}>Cadastre-se</Text></Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
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
        width: 80,
        height: 80,
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
        backgroundColor: '#6C63FF',
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