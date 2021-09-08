import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../global/styles';
import HomeStack from './HomeStack';
import CartStack from './CartStack';
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#ffbd7d',
        tabBarActiveTintColor: colors.orange,
      }}>
      <Tab.Screen
        component={HomeStack}
        name="Store"
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="store-alt" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={CartStack}
        name="Cart"
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="shopping-cart" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
