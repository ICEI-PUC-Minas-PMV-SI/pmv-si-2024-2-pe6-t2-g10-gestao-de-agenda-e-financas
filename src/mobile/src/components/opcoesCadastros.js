// src/mobile/src/components/opcoesCadastro.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OpcoesCadastro() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTROS</Text>
      
      <View style={styles.cardContainer}>
        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('CadastroClientes')}>
          <Image
            source={require('../../assets/cliente.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>CLIENTES</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('CadastroServicos')}>
          <Image
            source={require('../../assets/servico.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>SERVIÇOS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,

  },
  title: {
    color: '#7E5A9B',
    fontSize: 50,
    fontFamily: 'Roboto',
    marginBottom: 40
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 25,
  },
  card: {
    backgroundColor: '#7E5A9B',
    borderRadius: 10,
    padding: 20,
    width: 175,
    height: 175,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardImage: {
    width: 90,
    height: 90,
    marginBottom: 10
  },
  cardTitle: {
    color: '#F79824',
    fontSize: 20,
    textAlign: 'center'
  }
});