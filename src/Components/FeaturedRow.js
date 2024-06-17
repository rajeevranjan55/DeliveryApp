import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {themeColor} from '../Theme/theme';
import RestaurentCard from './RestaurentCard';

const FeaturedRow = () => {
  const restaurants = [
    {name: 'pearl habour', Image: require('../assets/Images/restaurants.jpg')},
    {name: 'pearl habour', Image: require('../assets/Images/restaurants.jpg')},
    {name: 'pearl habour', Image: require('../assets/Images/restaurants.jpg')},
    {name: 'pearl habour', Image: require('../assets/Images/restaurants.jpg')},
    {name: 'pearl habour', Image: require('../assets/Images/restaurants.jpg')},
    {name: 'pearl habour', Image: require('../assets/Images/restaurants.jpg')},
  ];
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 7,
        }}>
        <View>
          <Text style={{fontSize: 20, fontWeight: 900, marginBottom: 10}}>
            Hot and Spicy
          </Text>
          <Text>foods chicken</Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: themeColor.text, marginTop: 5}}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginRight: 5}}>
        {restaurants.map((item, index) => {
          return <RestaurentCard key={index} item={item} index={index} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FeaturedRow;
