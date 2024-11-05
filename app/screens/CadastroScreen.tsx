import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import f from '../assets/images/fiara.png';
import { CadastroStyles as styles } from '../style/screens';

export default function CadastroScreen() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!isPasswordVisible);
    };

    const handleCadastro = () => {
        if (acceptTerms) {
            Alert.alert("Cadastro realizado com sucesso!");
        } else {
            Alert.alert("Por favor, aceite os Termos de Uso para continuar.");
        }
    };

    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#3c2d91', '#8f94fb']} style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={f} style={styles.logo} />
            </View>



            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    onChangeText={setNome}
                    value={nome}
                    placeholderTextColor="#888"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor="#888"
                />

                <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    onChangeText={setCpf}
                    value={cpf}
                    keyboardType="numeric"
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

            <View style={styles.termsContainer}>
                <Text style={styles.termsText}>Concordo com os Termos de Uso</Text>
                <Switch
                    value={acceptTerms}
                    onValueChange={setAcceptTerms}
                    thumbColor={acceptTerms ? '#5810e8' : '#888'}
                    trackColor={{ false: '#ddd', true: '#8f94fb' }}
                />
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleCadastro}>
                <Text style={styles.loginButtonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.registerText}>Já tenho uma conta</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

