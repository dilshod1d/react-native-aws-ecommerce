import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();
const NavigatorsContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={BottomTab} name="HomeTabs" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorsContainer;
