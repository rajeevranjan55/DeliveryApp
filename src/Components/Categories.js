import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {themeColor} from '../Theme/theme';

const Categories = () => {
  const [active, setActive] = useState(null);
  const data = [
    {item: 'Burgere', id: 1, image: require('../assets/Images/burgur.jpg')},
    {item: 'Burgere', id: 2, image: require('../assets/Images/burger.jpg')},
    {item: 'Burgere', id: 3, image: require('../assets/Images/burger.jpg')},
    {item: 'Burgere', id: 4, image: require('../assets/Images/burger.jpg')},
    {item: 'Burgere', id: 5, image: require('../assets/Images/burger.jpg')},
    {item: 'Burgere', id: 6, image: require('../assets/Images/burger.jpg')},
    {item: 'Burgere', id: 7, image: require('../assets/Images/burger.jpg')},
    {item: 'Burgere', id: 8, image: require('../assets/Images/burger.jpg')},
  ];
  const data2 = [
    {item: 'nmnmn', image: require('../assets/Images/burgur.jpg')},
    {item: 'Burgere', id: 1, image: require('../assets/Images/burgur.jpg')},
    {item: 'Burgere', id: 2, image: require('../assets/Images/burger.jpg')},
    {item: 'Burgere', id: 3, image: require('../assets/Images/burger.jpg')},
    {item: 'Burgere', id: 4, image: require('../assets/Images/burger.jpg')},
    {item: 'Burgere', id: 5, image: require('../assets/Images/burger.jpg')},
    {item: 'Burgere', id: 6, image: require('../assets/Images/burger.jpg')},
    {item: 'Burgere', id: 7, image: require('../assets/Images/burger.jpg')},
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{flexDirection: 'row'}}>
      {data.map((item, index) => {
        return (
          <View key={index}>
            <TouchableOpacity onPress={() => setActive(index)} style={{}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: index == active ? 'grey' : 'lightgrey',
                  borderRadius: 8,
                  marginHorizontal: 5,
                  borderRadius: 30,
                  height: 60,
                  width: 60,
                }}>
                <Image source={item.image} style={{height: 30, width: 30}} />
              </View>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  margin: 6,
                  color: index == active ? themeColor.bgColor(0.9) : 'grey',
                }}>
                {item.item}
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Categories;
