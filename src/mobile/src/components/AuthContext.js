import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userToken, setUserToken] = useState(null); 
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const token = await AsyncStorage.getItem('@userToken');
        const storedUserName = await AsyncStorage.getItem('@userName');
        const storedUserId = await AsyncStorage.getItem('@userId');

        if (token && storedUserName && storedUserId) {
          setIsLoggedIn(true);
          setUserToken(token);
          setUserName(storedUserName);
          setUserId(storedUserId);

        }
      } catch (error) {
        console.error('Erro ao carregar dados de autenticação:', error);
      }
    };

    loadAuthData();
  }, []);

  const login = async (token, nome, id) => {
    try {
      await AsyncStorage.setItem('@userToken', token);
      await AsyncStorage.setItem('@userName', nome);
      await AsyncStorage.setItem('@userId', id);
      setIsLoggedIn(true);
      setUserToken(token);
      setUserName(nome);
      setUserId(id);
      
    } catch (error) {
      console.error('Erro ao salvar dados de autenticação:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('userName');
      await AsyncStorage.removeItem('userId');

      setIsLoggedIn(false);
      setUserName('');
      setUserId('');
    } catch (error) {
      console.error('Erro ao remover dados de autenticação:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userToken, userName, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
