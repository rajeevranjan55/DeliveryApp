import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {themeColor} from '../Theme/theme';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Cart = () => {
  const cartItem = useSelector(state => state.cart.items);

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CartScreen')}
      style={{
        backgroundColor: themeColor.bgColor(0.98),
        position: 'absolute',
        zIndex: 1,
        flexDirection: 'row',
        bottom: 10,
        marginHorizontal: 10,
        height: 70,
        width: '95%',
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          marginLeft: 8,
          backgroundColor: 'white',
          height: 30,
          width: 30,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: themeColor.bgColor(0.7), fontWeight: 700}}>
          {cartItem}
        </Text>
      </View>
      <Text style={{fontWeight: 500, fontSize: 18, color: 'white'}}>
        View Cart
      </Text>
      <Text
        style={{
          fontWeight: 500,
          fontSize: 18,
          color: 'white',
          marginRight: 8,
        }}>
        $ {cartItem * 19}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Cart;
