import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen';
import AdressScreen from '../screens/AdressScreen';

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen component={CartScreen} name="Cart" />
      <Stack.Screen component={AdressScreen} name="Address" />
    </Stack.Navigator>
  );
};

export default CartStack;
