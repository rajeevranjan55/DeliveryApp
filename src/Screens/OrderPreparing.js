import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {themeColor} from '../Theme/theme';

const OrderPreparing = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DeliveryScreen');
    }, 3000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: themeColor.bgColor(0.09),
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../assets/Images/oderPreparing.gif')}
        style={{height: 300, width: 300}}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default OrderPreparing;
