import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';
import * as Icon from 'react-native-feather';
import {themeColor} from '../Theme/theme';
import Categories from '../Components/Categories';

import FeaturedRow from '../Components/FeaturedRow';
const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 4,
        marginTop: 10,
      }}>
      <StatusBar
        backgroundColor={themeColor.bgColor(0.6)}
        barStyle={'dark-content'}
      />
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: 'white',
              borderColor: 'grey',
              borderWidth: 1,
              height: 45,
              borderRadius: 17,
              flexDirection: 'row',
              flex: 1,
            }}>
            <Icon.Search
              height={25}
              width={25}
              stroke={'grey'}
              style={{marginTop: 8, marginLeft: 4}}
            />
            <TextInput placeholder="Restaurants" style={{flex: 1}} />
            <View
              style={{
                flex: 0.58,
                marginRight: 5,
                borderLeftColor: 'lightgrey',
                borderLeftWidth: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',

                marginVertical: 5,
              }}>
              <Icon.MapPin height={25} width={25} stroke={'grey'} />
              <Text>New York,NYC</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: themeColor.bgColor(0.4),
              height: 35,
              width: 35,
              marginTop: 5,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 3,
            }}>
            <Icon.Sliders height={29} width={29} stroke={'red'} />
          </View>
        </View>
        <Categories />
        <FeaturedRow />
        <FeaturedRow />
        <FeaturedRow />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
