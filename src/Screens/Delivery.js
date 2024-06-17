import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {themeColor} from '../Theme/theme';
import * as Icon from 'react-native-feather';
const Delivery = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="lightblue" />
      <MapView
        style={{height: '100%', width: '100%'}}
        mapType="standard"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0002,
          longitudeDelta: 0.0041,
        }}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title={'Papa johns'}
          description="New York city"
          pinColor={themeColor.bgColor(0.7)}
        />
      </MapView>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          position: 'absolute',
          width: '100%',
          bottom: 0,
          height: '30%',
        }}>
        <Text
          style={{color: 'black', padding: 10, fontSize: 19, fontWeight: 500}}>
          Estimated Arrival
        </Text>
        <Text
          style={{
            color: 'black',
            paddingLeft: 10,
            fontSize: 19,
            fontWeight: 500,
          }}>
          20 - 30 Minutes
        </Text>

        <View
          style={{
            marginBottom: 15,
            flexDirection: 'row',
            flex: 1,
            zIndex: 1,
            backgroundColor: themeColor.bgColor(0.7),
            height: 80,
            marginTop: 80,
            marginHorizontal: 8,
            borderRadius: 35,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 80,
              width: 80,
              borderRadius: 40,
              marginLeft: 10,
            }}></TouchableOpacity>
          <View style={{marginLeft: 10}}>
            <Text style={{color: 'black', fontSize: 19, fontWeight: 500}}>
              Rajeev Ranjan
            </Text>
            <Text style={{fontWeight: 500}}>Your Rider</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 40,
              width: 40,
              marginLeft: 19,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon.PhoneCall style={{}} stroke={themeColor.bgColor(0.9)} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              height: 40,
              width: 40,
              marginLeft: 30,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon.X style={{}} stroke={themeColor.bgColor(0.9)} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Delivery;
