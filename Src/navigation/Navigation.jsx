import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { navigationRef } from '@utils/NavigationUtils';

import BottomTab from './BottomTab';
import HomeScreen from '../booking/HomeScreen';
import BookingScreen from '../booking/BookingScreen';
import OtpScreen from '../auth/OtpScreen';
import LoginScreen from '../auth/LoginScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    // <NavigationContainer ref={navigationRef}>
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="LoginScreen"
      >
        <Stack.Screen
          name={'LoginScreen'}
          options={{ animation: 'fade' }}
          component={LoginScreen}
        />
        <Stack.Screen
          name={'OtpScreen'}
          options={{ animation: 'fade' }}
          component={OtpScreen}
        />

        <Stack.Screen
          name={'BottomTab'}
          options={{ animation: 'fade' }}
          component={BottomTab}
        />
        <Stack.Screen
          name={'HomeScreen'}
          options={{ animation: 'fade' }}
          component={HomeScreen}
        />

       
        <Stack.Screen
          name={'BOOKINGSCREEN'}
          options={{ animation: 'fade' }}
          component={BookingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
