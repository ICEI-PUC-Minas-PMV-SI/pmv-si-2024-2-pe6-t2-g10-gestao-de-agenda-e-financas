import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import BoasVindas from './BoasVindas';
import Nbar from './nav';
import Cadastro from './cadastro';
import pagInicial from './pagInicial';
import OpcoesCadastro from './opcoesCadastros';
import CadastroClientes from './Cadastroclientes';
import ListaClientes from './Listaclientes';
import CadastroServicos from './CadastroServicos';
import ListaServicos from './ListaServicos';
import Financeiro from './Financeiro';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <>
      <Nbar />
      <Stack.Navigator initialRouteName="pagInicial" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="pagInicial" component={pagInicial} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BoasVindas" component={BoasVindas} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="OpcoesCadastro" component={OpcoesCadastro} />
        <Stack.Screen name="CadastroClientes" component={CadastroClientes}/>
        <Stack.Screen name="Listaclientes" component={ListaClientes}/>
        <Stack.Screen name="CadastroServicos" component={CadastroServicos} />
        <Stack.Screen name="ListaServicos" component={ListaServicos} />
        <Stack.Screen name="Financeiro" component={Financeiro} />
      </Stack.Navigator>
    </>
  );
}
