import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import * as Icon from 'react-native-feather';
import {themeColor} from '../Theme/theme';
import {useDispatch} from 'react-redux';
import {cartItemUpdate} from '../Redux/slices/cartSlice';

const Menu = ({setCartItem}) => {
  const handleItem = item => {
    if (item == 'plus') {
      setCartItem(prev => prev + 1);
    } else if (item == 'minus') {
      setCartItem(prev => prev - 1);
    }
  };
  return (
    <View>
      <Text style={{fontWeight: 'bold', marginTop: 10, fontWeight: 700}}>
        Menu
      </Text>
      <View
        style={{
          flexDirection: 'row',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 4,
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
          height: 100,
        }}>
        <Image
          style={{
            marginTop: 9.5,
            height: 90,
            width: 85,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
          }}
          source={require('../assets/Images/burgur.jpg')}
        />
        <View
          style={{
            flex: 1,
            marginLeft: 5,
          }}>
          <Text style={{fontWeight: 800, marginTop: 10}}>Burger</Text>
          <Text style={{}}>Hot and spicy burger</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginBottom: 9,
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
              }}>
              $ 19
            </Text>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity
                onPress={() => handleItem('minus')}
                style={{
                  backgroundColor: themeColor.bgColor(0.8),
                  borderRadius: 10,
                  height: 20,
                  width: 20,
                }}>
                <Icon.Minus height={20} width={20} stroke={'white'} />
              </TouchableOpacity>
              <Text style={{marginHorizontal: 8}}>1</Text>
              <TouchableOpacity
                onPress={() => handleItem('plus')}
                style={{
                  backgroundColor: themeColor.bgColor(0.8),
                  borderRadius: 10,
                  height: 20,
                  width: 20,
                }}>
                <Icon.Plus height={20} width={20} stroke={'white'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Menu;
