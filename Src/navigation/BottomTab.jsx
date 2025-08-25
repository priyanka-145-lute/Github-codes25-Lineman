import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {FC} from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../booking/HomeScreen';
import BookingScreen from '../booking/BookingScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={tabsProps => <BottomTabBar {...tabsProps} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={focused ? '#000000' : '#7c7a7a'}
              size={32}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialIcons
              name="people"
              color={focused ? '#000000' : '#7c7a7a'}
              size={32}
            />
          ),
        }}
      />

     
         
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
