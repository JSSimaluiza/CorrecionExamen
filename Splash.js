import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const SplashScreens = ({ navigation }) => {
  useEffect(() => {
    // Duración del GIF en milisegundos
    const splashDuration = 2000; // Ajusta este valor según la duración del GIF
    const timer = setTimeout(() => {
      navigation.navigate('Home'); // Redirige a la pantalla "App"
    }, splashDuration);

    return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonta
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '100%', // Ajusta el ancho para que ocupe todo el contenedor
    height: '100%', // Ajusta la altura para que ocupe todo el contenedor
    resizeMode: 'contain', // Asegúrate de que la imagen se ajuste correctamente
  },
});

export default SplashScreens;
