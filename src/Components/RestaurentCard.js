import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

const RestaurentCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Restaurant', {...item})}>
      <View>
        <Text>{item.name}</Text>
        <Image
          source={item.Image}
          style={{
            height: 90,
            width: 150,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            marginHorizontal: 5,
            marginTop: 10,
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({});

export default RestaurentCard;
