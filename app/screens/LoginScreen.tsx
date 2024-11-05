import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import f from '../assets/images/fiara.png'
import { loginStyles as styles } from '../style/screens'

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
        navigation.navigate('Agendamento');
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

    // funçao para ir a tela de cadastro
    const handleCadastro = () => {
        navigation.navigate('Cadastro')
    }

    return (
        <LinearGradient colors={['#3c2d91', '#8f94fb']} style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={f} style={styles.logo} />

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
                <Text style={styles.registerText}>Não tem uma conta? <Text style={styles.registerLink} onPress={handleCadastro}>Cadastre-se</Text></Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

