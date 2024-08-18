import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroApps from './components/pages/introApp';
import LoginScreen from './components/pages/login';
import HomePage from './components/pages/home';
import HasilScreen from './components/pages/hasil';
// import FavoritesScreen from './components/pages/favorites';
// import NotificationsScreen from './components/pages/notifications';
// import InfoScreen from './components/pages/info';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" component={IntroApps} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Hasil" component={HasilScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Favorit" component={FavoritesScreen} /> */}
        {/* <Stack.Screen name="Notifikasi" component={NotificationsScreen} /> */}
        {/* <Stack.Screen name="Informasi" component={InfoScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
