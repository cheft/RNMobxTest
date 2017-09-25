import React from 'react';
import { View, StatusBar } from 'react-native';
import Counter from './pages/counter';

export default function () {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#202930'}
      />
      <Counter />
    </View>
  );
}
