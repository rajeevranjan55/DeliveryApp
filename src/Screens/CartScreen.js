import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Icon from 'react-native-feather';
import {themeColor} from '../Theme/theme';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {
  decreaseCartItemQuantity,
  resetCartItems,
} from '../Redux/slices/cartSlice';

const CartScreen = ({navigation}) => {
  const route = useRoute();
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  const handleItem = action => {
    if (action === 'minus' && cartItems > 0) {
      dispatch(decreaseCartItemQuantity());
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 8,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: themeColor.bgColor(0.8),
            width: 30,
            justifyContent: 'center',
            borderRadius: 15,
            height: 30,
            marginTop: 6,
          }}
          onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft style={{alignSelf: 'center'}} stroke={'white'} />
        </TouchableOpacity>
        <View>
          <Text style={{fontSize: 18, fontWeight: '800', color: 'black'}}>
            Your Cart
          </Text>
          <Text style={{fontSize: 15}}>Papa Johns</Text>
        </View>
        <Text />
      </View>
      <View
        style={{
          backgroundColor: themeColor.bgColor(0.2),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 70,
          marginTop: 10,
        }}>
        <Image
          source={require('../assets/Images/bike.png')}
          style={{
            height: 60,
            width: 50,
            marginLeft: 15,
          }}
        />
        <Text>Deliver in 20 - 30 minutes</Text>
        <TouchableOpacity>
          <Text style={{color: themeColor.bgColor(0.8), marginEnd: 5}}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            marginTop: 8,
            height: 70,
            alignItems: 'center',
            marginHorizontal: 5,
            borderRadius: 15,
          }}>
          <Text style={{color: 'black', marginHorizontal: 5}}>
            {cartItems} x
          </Text>
          <Image
            source={require('../assets/Images/burgur.jpg')}
            style={{height: 45, width: 45, borderRadius: 22}}
          />
          <Text style={{color: 'black', marginHorizontal: 5}}> pizza</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={{color: 'black', marginRight: 10}}>$ 19</Text>
          </View>
          <TouchableOpacity onPress={() => handleItem('minus')}>
            <Icon.Minus
              stroke={'white'}
              style={{
                backgroundColor: themeColor.bgColor(0.7),
                borderRadius: 16,
                marginRight: 5,
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: themeColor.bgColor(0.4),
          height: 170,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 18,
            marginTop: 15,
          }}>
          <Text>Subtotal</Text>
          <Text> $ {cartItems * 19}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 18,
            marginTop: 15,
          }}>
          <Text>Delivery Fee</Text>
          <Text>$ 20</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 18,
            marginTop: 15,
          }}>
          <Text style={{color: 'black'}}>Order Total</Text>
          <Text style={{color: 'black'}}>$ {cartItems * 19 + 20}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('OrderPrepare')}
          style={{
            backgroundColor: themeColor.bgColor(0.9),
            height: 40,
            marginHorizontal: 28,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 18,
            marginTop: 10,
          }}>
          <Text style={{color: 'white'}}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CartScreen;
