import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Svg, { Rect, Image } from 'react-native-svg';
import { createApiWithToken } from '../services/api';
import { useAuth } from './AuthContext';



const ListaServicos = ({ navigation }) => {
  const [servicos, setServicos] = useState([]);
  const { userToken } = useAuth();
  const api = createApiWithToken(userToken);


  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const response = await api.get('/Servicos');
        setServicos(response.data);
      } catch (error) {
        console.error('Erro ao buscar serviços:', error);
        Alert.alert('Erro', 'Falha ao carregar a lista de serviços.');
      }
    };
    fetchServicos();
  }, [api]);

  const handleNavigateToCadastro = () => {
    navigation.navigate('CadastroServicos');
  };


  const handleDelete = async (id) => {
    try {
      await api.delete(`/servicos/${id}`);
      setServicos(servicos.filter(servico => servico._id !== id));
    } catch (error) {
      console.error('Erro ao excluir serviço:', error);
      Alert.alert('Erro', 'Falha ao excluir serviço.');
    }
  };

  const handleEdit = (servico) => {
    navigation.navigate('CadastroServicos', { servico });
  };

  const renderItem = ({ item, index }) => (
    <View style={[styles.row, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}>
      <Text style={styles.cell}>{item.descricao}</Text>
      <Text style={styles.cell}>{item.preco}</Text>
      <Text style={styles.cell}>{item.duracao}</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleEdit(item)} style={styles.buttonEdit}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item._id)} style={styles.buttonDelete}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Serviços</Text>
      <TouchableOpacity onPress={handleNavigateToCadastro} style={styles.svgButton}>
        <Svg width="79" height="83" viewBox="0 0 79 83" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Rect width="79" height="83" rx="8" fill="#7E5A9B" />
          <Image
            x="13"
            y="14"
            width="53"
            height="55"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA
                AAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7DAAAOwwHH
                b6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABe5JREFUeJzlm12IVVUUx//7JuZD6mijiKiYmpKa
                hdVLqaOBgkRBkEqE3yW9iIKGb6UvPehk9CT1ZJaKRk/FWBj5MenD6EOhIzk4QlJJTY6alpp4fz3se/F6Zp0zd849+9wR/3Af
                Zp299/qvNWd/rLXXcaoTgHWSNklqlHRd0hVJlyWdLf3aJR11zv1ZL46pABSAJmA5MC6mzWyqQxE4BWwHnsvblj4BaATeATor
                DLgOPG+03VClA6I4U9IxpB42xgJYD/wbQ/pro/2slA4ooxvYAgyvh71RY57Cv6px+C6m31rgtxod0QWsBlzedlca8kYCwTvA
                q730HwgMAyYAc4E1wEfAj6X+1eA48HheNkcNeAy4YRjeAsyqcexGYCVwqApnXAWWZGWXReYhYBXQDCyIPFsItOFX7K3AhAD6
                JwA7gJu9OOJDoJC18kHAgYiiFZkqqZ7LaGAXyevOXmBgVgoHAd8YSk5koiA9rzlAR4ITDtTsBPxrH/3Pl3E4G1Nq4jcY2NPL
                m5B+OuDnvIXbwLwMbakJ+INV3JTYXsvAzTHGL8qQfyYAlgL/xThhcdpB598PxpdRcoL1JlwFJqUddAVwAjjcn177OBAfZxyj
                nifGPAF8FuOEVdV0fhp/vB0fnmoY4HcHa4vsAoYldVxfMYduAAtz5J0p8DkJaz3YEtehkZ4hbVvOvDNFzFToxson4BMNUZwK
                SK4BH/mtAYYG0jEGO3bYGG1Y4N5MThlbAxFrAM5X6OkM6ISPDbvao42ajEZ3CBDVlfS9behbE0jXROy14BlJKp+Txxt9v3XO
                nQ9BStIoQzY6hCLnXKeko8aj16W7Djgk6Z+Kh0VJ74cgVCfsMmTzpZIDnHMXJC2Q1CLpe0mLnHM/5EYvPL6SRET2JDBiQPkv
                59xxSS/lSisnOOe68DvajEqxpDnZpo76N44YsmkPkgPOGLLJD5IDzhqyKQMkf1cn6VlJJ51zrbVoARokLZYUH3RIL1gyYFNC
                n8uS9jnnrqak9oshe1TAusgBYW1KBdYJL2ukPjHiY50ougRcjAgv1uAA64SXNVKdGIGHjbFuFiRFLxhHkT6dXEzZr246CvLF
                CVE8knK8/ZJCHZ8lqVPSFyn7DjZk1wZIuqaeb8EQSd191eCcuwLMlF8EJyY0naWeC+ExSUmnz05J+2tYBK2agmsCThpzY25K
                JVUB2Gzo3BxY54uGzraCpA6j/eSQZOqEKYbsbEH2AWFaYDL1wFRD1lGQdNp40BSYTD1g2dRekNSqnqHiDKAxPKd8AIyUND0q
                lnS0UKrDa488dJJezoNcTnhF3qZK/OSc+6scDB00Oi0NyylXWLYclO6mxPYYDZoIlBSV9Lsh+zWEIvyl6Gzj0d5ow1PGPrkj
                EKkG7k3DnyNcWvwTw67olJeAjVawAATJ1gJDgbdKv1DGjwVuGXZtsBoPwV8bRfFpCHJ5ALt85hJgxQUSvvw0iiL3QV1AFPgi
                KutC5N2kTsPwV8hRdNDfCpQTUHqbzxl2/IHPWCV2Xm10BNiXE/+aAeyOsWFFNZ0dvpzEwsZeB6gzgE0x3FuptkQGmARcMQYp
                AisD25Aa+MoWa97/DfQtwgWWxHjyNrAskA2pgf9C5XYM59fSDro9ZsAi/Wg64F/7uELJ5loGdsDOmIEBvqS3VTUg8MVQexP4
                7aHWynH8Bw0tCUo6CJxCi+E1D3urK6OFDCvGB5JclFwEPgfGZKIwmctY4re5MnZnZnyF4gLwQS+Kb+FrcpIywmn1T8IHNtbZ
                vhLNhKwIBRbha2+TUMSX1q7GZ2PS6hoJvAkcIfkDCfDbdp9X+1SewsfYO2VfcvZoLp93PCx/Rd0h6YL8vUP5Umaw/GXqOPmM
                9DT5HN70Kjkek7S8VA+UD/A7xDL8+bpeuIS/3K3fNT8+gNpcIpOn4e9Rxy24B/B78gbgdEDDT5d02PF8fwEwE9iG//ixt8Ur
                CcXSGNvwd46ZI/gHBMAI+aTkVElPyC9ywyU16O4tdPnz+W75RfJn+VR9q3OuKyS//wF8DjUAzr7fOQAAAABJRU5ErkJggg=="
          />
        </Svg>
      </TouchableOpacity>

      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderCell}>Descrição</Text>
          <Text style={styles.tableHeaderCell}>Preço</Text>
          <Text style={styles.tableHeaderCell}>Duração</Text>
          <Text style={styles.tableHeaderCell}>Ações</Text>
        </View>
        <FlatList
          data={servicos}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },

  header: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7E5A9B',
    marginBottom: 20,
  },

  table: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    overflow: 'hidden',
  },

  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },

  tableHeaderCell: {
    flex: 1,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: 'black',
  },

  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  rowEven: {
    backgroundColor: '#f9f9f9',
  },

  rowOdd: {
    backgroundColor: 'white',
  },

  cell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 0,
    borderRightWidth: 1,
    borderRightColor: 'black',
    fontWeight: 'bold',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },

  buttonEdit: {
    backgroundColor: '#7E5A9B',
    paddingVertical: 20,
    paddingHorizontal: 2,
    borderRadius: 5,
    marginHorizontal: 2,
  },

  buttonDelete: {
    backgroundColor: '#d9534f',
    paddingVertical: 20,
    paddingHorizontal: 2,
    borderRadius: 5,
    marginHorizontal: 2,
  },

  buttonText: {
    color: 'white',
    fontSize: 12,
  },

  svgButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
});

export default ListaServicos;
