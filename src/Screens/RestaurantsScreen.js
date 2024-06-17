import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import * as Icon from 'react-native-feather';
import {themeColor} from '../Theme/theme';
import Menu from '../Components/Menu';
import Cart from '../Components/Cart';
import {useDispatch} from 'react-redux';
import {cartItemUpdate} from '../Redux/slices/cartSlice';

const RestaurantsScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const params = useRoute();
  let item = params;
  const [cartItem, setCartItem] = useState(0);

  useEffect(() => {
    dispatch(cartItemUpdate(cartItem));
  }, [cartItem]);

  const navigateToCart = () => {
    navigation.navigate('CartScreen', {setCartItem});
  };

  return (
    <View style={{flex: 1}}>
      <Cart />
      <Image
        source={require('../assets/Images/restaurantScreen.jpg')}
        style={{width: '100%', height: '30%'}}
      />
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          backgroundColor: themeColor.bgColor(0.3),
          position: 'absolute',
          top: 10,
          left: 10,
          borderRadius: 15,
        }}
        onPress={() => navigation.goBack()}>
        <View style={{alignItems: 'center', marginTop: 4.4}}>
          <Icon.ArrowLeft height={20} width={20} stroke={themeColor.text} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          marginTop: -15,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 15,
            marginLeft: 15,
          }}>
          Papa Johns
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: 15, marginHorizontal: 10}}>
          <Menu setCartItem={setCartItem} />
          <Menu setCartItem={setCartItem} />
          <Menu setCartItem={setCartItem} />
          <Menu setCartItem={setCartItem} />
          <Menu setCartItem={setCartItem} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantsScreen;
