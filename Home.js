import React from 'react';
import { View, Text, TouchableOpacity, Linking, Image, StyleSheet, SafeAreaView } from 'react-native';
import Texto from './Texto';

// Asegúrate de usar la ruta correcta para tu GIF
const gifUrl = require('./assets/Back.gif'); // Cambia la ruta si es necesario

export default function Home({ navigation }) {
  // Función para redireccionar a LinkedIn
  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/jhon-simaluiza-51b183276');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Examen de Programación para dispositivos móviles</Text>
      </View>
      <View style={styles.gifContainer}>
        <Image source={gifUrl} style={styles.gif} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Texto')} // Navegar a la pantalla Texto
        >
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={openLinkedIn}>
          <Text style={styles.link}>Visita mi perfil de LinkedIn</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Para que el botón y el enlace estén al final
    backgroundColor: 'white',
  },
  gifContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  gif: {
    width: 250,
    height: 250,
    borderRadius: 500, // Aumenté el valor para un borde más redondeado
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold', // Establecido a negrita
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'darkorange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  linkContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
