import React from 'react';
import {StyleSheet, View} from 'react-native';

const Index = () => {
  const data = [
    {item: Burgere},
    {item: Burgere},
    {item: Burgere},
    {item: Burgere},
    {item: Burgere},
  ];
  return (
    <View>
      {data.map((item, index) => {
        <View>
          <Text>{item.item}</Text>
        </View>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
