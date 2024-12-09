import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import api from '../services/api';

const CadastroServicos = ({ navigation }) => {
    const [formData, setFormData] = useState({
        descricao: '',
        preco: '',
        duracao: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async () => {
        const { descricao, preco, duracao } = formData;

        if (!descricao || !preco || !duracao) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await api.post('/servicos', formData);
            Alert.alert('Sucesso', 'Serviço cadastrado com sucesso!');
            setFormData({ descricao: '', preco: '', duracao: '' });
        } catch (error) {
            Alert.alert('Erro', 'Falha ao cadastrar serviço. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        setFormData({ descricao: '', preco: '', duracao: '' });
        Alert.alert('Cancelado', 'O formulário foi limpo.');
    };

    const navigateToListaServicos = () => {
        navigation.navigate('ListaServicos');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Serviços</Text>

            <TouchableOpacity style={styles.iconButton} onPress={navigateToListaServicos}>
            <View style={styles.iconBackground}>
                    <SvgXml xml={`<svg width="79px" height="83px" viewBox="0 0 79 83" xmlns="http://www.w3.org/2000/svg"><rect width="79" height="83" rx="8" fill="#F79824" /><image x="13" y="14" width="53" height="55" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA0BJREFUeJztmztoFEEch3+Dr5CoBKyMivjAtxixsVFRQQtBxcrKzkIQVBSsLBQsFNTCSkQQFCwNiJUvtFFQ8YUpLAJqYRTxGRRjzs8iezC3mbvb7M5ubsl8cHC3M/Pn9/3nhizsRQoEAmUF6ASOA8+AD8BnoA+4CWwb63y5AUwErgEVGvMR2DnWeb0CzAT6HbIV4G+dRpwf69xeAOYCAzHpHqDbmtMGHIp23+bcWGbPDLAitsPfgCVN1lyKNWFLUXm9Esnb530QmJNw7RVr3bu8s3rHIV/lPjA1YY2v1rrVeWf2Rp2df2R9vg20J6hz2lpzuYDo2QGWAUMx+S6gA7hnXX/Q7JsAzLPmPynKITX15K3xNE2o0pe/QQaayVvzOoC7SZoATLXmvcjfIiVJ5a357UmaAOy15vTka5GS0cpb65o2AXhlje/IzyIlaeWt9e3AHVcTgF3W9YH8LFICLM0ib9VxNWFtVK/KkTwcUgMsccjPzlAv3gT7HuKRz+yZAZYz8iZn1DvvqNsBPKaW98BkH7m9EJ35uHzqnY/V3gj8s2r/IMHdYmH4/trHam+Iyf8Cpvuo7YUgH+SDfJAfT/KLg3yQD/JB3lPtIB/kW1R+YZAP8kF+3MsnekqboHaQD/ItKj/BIT/LU+3NDvlEz/wLA1hHLSc81W19eUkCdjOSgxlrbnLIT/OV2SvASUcDAA6nrNfaZz4OcCMK+gm4nqUJpZOXJOBtFPZW9DlVE8oq32mFPmNdH1UTSikvScB6K/Se2FiiJpRWXpKA/Vbwbsd4wyaUWl6SgAtR8L/AlDpznE0ovbwkAQ+j8C+bzIs34aJDvjX/ztcDMAw/Wwe4mmB+D25aeucnNhhbIKm6azW/rYt2c5Gk5ZLWRC/Xb3B/S5ppjPmRPWo+NGrASuv9DOCYpFWSuiXNl2Sa1P4pqcsY03q/zLJo1IBV1vujDeYNSXoj6bWkXklPJT02xvRnj5c/jRrgOrdfJD3X8JGovnqNMYM5ZCuERg04Jaki6bsiWWNM+f7hoAkjzjFwVtJ211jJQdJNY8wB+2KNJGAk/ZE0qcBgRTIkqc0YU6leqDkCxhiAfZK2Fp2sIG7Z8oFAQP8BMeOQk9LgP9gAAAAASUVORK5CYII=" /> </svg>`} />
                </View>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Descrição"
                value={formData.descricao}
                onChangeText={(value) => handleInputChange('descricao', value)}
            />

            <TextInput
                style={styles.input}
                placeholder="Preço"
                value={formData.preco}
                onChangeText={(value) => handleInputChange('preco', value)}
                keyboardType="decimal-pad"
            />

            <TextInput
                style={styles.input}
                placeholder="Duração"
                value={formData.duracao}
                onChangeText={(value) => handleInputChange('duracao', value)}
                keyboardType="number-pad"
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.saveButton]}
                    onPress={handleSubmit}
                    disabled={isSubmitting}
                >
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },

    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#7E5A9B',
        textAlign: 'center',
        marginBottom: 50,
    },

    input: {
        height: 50,
        borderColor: '#BDBDBD',
        borderWidth: 3,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        color: '#000',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20,
    },

    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginLeft: 10,
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    saveButton: {
        backgroundColor: '#28a745',
    },

    cancelButton: {
        backgroundColor: 'red',
    },

    iconButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        left: -12,
        alignItems: 'center',
        marginBottom: 50,
    },

    iconBackground: {
        width: 53,
        height: 55,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CadastroServicos;
