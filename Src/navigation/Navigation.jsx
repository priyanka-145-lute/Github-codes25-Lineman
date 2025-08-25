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
import BookElectrician from '../booking/BookElectrician';
import BookPainter from '../booking/BookPainter';
import BookPlumber from '../booking/BookPlumber';
import BookTiler from '../booking/BookTiler';
import BookACRepair from '../booking/BookACRepair';
import ProductReceiptScreen from '../workdone/ProductReceiptScreen';
import ProfileScreen from '../profile/ProfileScreen';
import EditProfileScreen from '../profile/EditProfileScreen';
import ViewProfile from '../profile/ViewProfile';
import EnterYourLocationScreen from '../EnterLocationScreen';
import PaymentOptionScreen from '../payment/PaymentOptionScreen';
import SelectCard from '../SelectCard';
import CashOnDelivery from '../CashOnDelivery';
import PaymentSuccessScreen from '../payment/PaymentSuccessScreen';
import DetailsScreen from '../booking/DetailsScreen';
import ReceiptScreen from '../workdone/ReceiptScreen';
import BookingDetailsScreen from '../workdone/BookingDetailsScreen';
import BookingDetailsScreen1 from '../workdone/BookingDetailsScreen1';
import BookingDetailsScreen2 from '../workdone/BookingDetailsScreen2';

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
          name={'BookingScreen'}
          options={{ animation: 'fade' }}
          component={BookingScreen}
        />
        <Stack.Screen
          name={'BookElectrician'}
          options={{ animation: 'fade' }}
          component={BookElectrician}
        />
        <Stack.Screen
          name={'BookPainter'}
          options={{ animation: 'fade' }}
          component={BookPainter}
        />
        <Stack.Screen
          name={'BookPlumber'}
          options={{ animation: 'fade' }}
          component={BookPlumber}
        />
        <Stack.Screen
          name={'BookTiler'}
          options={{ animation: 'fade' }}
          component={BookTiler}
        />
        <Stack.Screen
          name={'BookACRepair'}
          options={{ animation: 'fade' }}
          component={BookACRepair}
        />

        <Stack.Screen
          name={'BOOKINGSCREEN'}
          options={{ animation: 'fade' }}
          component={BookingScreen}
        />
        <Stack.Screen
          name={'ProductReceiptScreen'}
          options={{ animation: 'fade' }}
          component={ProductReceiptScreen}
        />
         <Stack.Screen
          name={'ProfileScreen'}
          options={{ animation: 'fade' }}
          component={ProfileScreen}
        />
         <Stack.Screen
          name={'EditProfileScreen'}
          options={{ animation: 'fade' }}
          component={EditProfileScreen}
        />
         <Stack.Screen
          name={'ViewProfile'}
          options={{ animation: 'fade' }}
          component={ViewProfile}
        />
         <Stack.Screen
          name={'EnterLocationScreen'}
          options={{ animation: 'fade' }}
          component={EnterYourLocationScreen}
        />
         <Stack.Screen
          name={'PaymentOptionScreen'}
          options={{ animation: 'fade' }}
          component={PaymentOptionScreen}
        />
        <Stack.Screen
          name={'SelectCard'}
          options={{ animation: 'fade' }}
          component={SelectCard}
        />
        <Stack.Screen
          name={'CashOnDelivery'}
          options={{ animation: 'fade' }}
          component={CashOnDelivery}
        />
         <Stack.Screen
          name={'PaymentSuccessScreen'}
          options={{ animation: 'fade' }}
          component={PaymentSuccessScreen}
        />
         <Stack.Screen
          name={'DetailsScreen'}
          options={{ animation: 'fade' }}
          component={DetailsScreen}
        />
         <Stack.Screen
          name={'ReceiptScreen'}
          options={{ animation: 'fade' }}
          component={ReceiptScreen}
        />
         <Stack.Screen
          name={'BookingDetailsScreen'}
          options={{ animation: 'fade' }}
          component={BookingDetailsScreen}
        />
         <Stack.Screen
          name={'BookingDetailsScreen1'}
          options={{ animation: 'fade' }}
          component={BookingDetailsScreen1}
        />
         <Stack.Screen
          name={'BookingDetailsScreen2'}
          options={{ animation: 'fade' }}
          component={BookingDetailsScreen2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
