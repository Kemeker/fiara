import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import screens
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AgendamentoScreen from '../screens/AgendamentoScreen';
import MeusAtendimentosScreen from '../screens/MeusAtendimentosScreen';
import ConfirmarLocalizacaoScreen from '../screens/ConfirmarLocalizacaoScreen';
import BuscaServicosScreen from '../screens/BuscaServicosScreen';
import CadastroScreen from '../screens/CadastroScreen';
import AguardandoPagamentoScreen from '../screens/AguardandoPagamentoScreen';
import Pagamento from '../screens/PagamentoScreen';


const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Serviços" component={DashboardScreen} />
        <Stack.Screen name="Agendamento" component={AgendamentoScreen} />
        <Stack.Screen name="MeusAtendimentos" component={MeusAtendimentosScreen} />
        <Stack.Screen name="ConfirmarLocalizacao" component={ConfirmarLocalizacaoScreen} />
        <Stack.Screen name="BuscaServicos" component={BuscaServicosScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Pagamento" component={AguardandoPagamentoScreen} />
        <Stack.Screen name="QRCode" component={Pagamento} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

