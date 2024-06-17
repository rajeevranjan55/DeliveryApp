import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Home from '../Screens/Home';
import RestaurantsScreen from '../Screens/RestaurantsScreen';
import CartScreen from '../Screens/CartScreen';
import OrderPreparing from '../Screens/OrderPreparing';
import Delivery from '../Screens/Delivery';
const stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Restaurant" component={RestaurantsScreen} />
        <stack.Screen
          name="CartScreen"
          options={{presentation: 'card'}}
          component={CartScreen}
        />
        <stack.Screen name="OrderPrepare" component={OrderPreparing} />
        <stack.Screen name="DeliveryScreen" component={Delivery} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Routes;
