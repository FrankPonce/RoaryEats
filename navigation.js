import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import { View, Text, TextInput } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderPreparingScreen from './screens/OrderPreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
         headerShown: false,
         gestureEnabled: true
      }} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" options={{presentation: 'modal', animation:"slide_from_bottom"}} component={CartScreen} />
        <Stack.Screen name="OrderPreparing" options={{presentation: 'fullScreenModal', animation:"slide_from_bottom"}} component={OrderPreparingScreen} />
        <Stack.Screen name="Delivery" options={{presentation: 'fullScreenModal', animation:"slide_from_bottom"}} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}