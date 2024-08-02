import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import axios from 'axios';

const Texto = () => {
    const [inputText, setInputText] = useState('');
    const [historico, setHistorico] = useState([]);

    const handleClassify = () => {
        axios.post('http://192.168.0.6:5010/clasificar', {
            texto: inputText
        })
            .then(response => {
                const { resultado, historico } = response.data;
                Alert.alert('Clasificación', resultado);
                setHistorico(historico);
            })
            .catch(error => {
                console.error('Error:', error);
                Alert.alert('Error', 'Hubo un error al clasificar el texto.');
            });
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('./assets/logo.png')} // Reemplaza 'your-image.png' con el nombre de tu imagen
                style={styles.image}
            />
            <Text style={styles.title}>Clasificador de Texto</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresa el texto a clasificar"
                value={inputText}
                onChangeText={setInputText}
            />
            <TouchableOpacity style={styles.button} onPress={handleClassify}>
                <Text style={styles.buttonText}>Clasificar</Text>
            </TouchableOpacity>
            <View style={styles.historicoContainer}>
                <Text style={styles.historicoTitle}>Histórico de Clasificaciones:</Text>
                {historico.map((item, index) => (
                    <View key={index} style={styles.historicoItem}>
                        <Text style={styles.historicoText}>{item}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white'
    },
    image: {
        width: 750,
        height: 200,
        alignSelf: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'skyblue',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: 'darkorange',
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    historicoContainer: {
        marginTop: 20,
    },
    historicoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    historicoItem: {
        fontSize: 16,
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'brown',
        paddingBottom: 5,
    },
    historicoText: {
        textAlign: 'left',  // Centra el texto del historial
    }
});

export default Texto;
