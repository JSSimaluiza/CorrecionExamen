import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SplashScreens from './Splash'; // Pantalla de splash
import Texto from "./Texto";
import Home from './Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home-account" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Texto" component={Texto} options={{
        tabBarLabel: 'Texto',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="file-pdf-box" color={color} size={size} />
        )
      }} />
    </Tab.Navigator>
  );
}

function ContainerRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreens} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Texto" component={Texto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ContainerRoutes;