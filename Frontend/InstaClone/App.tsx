import { StatusBar, View } from 'react-native';
import React from 'react';

import Home from './src/screens/HomeScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Stacknav from './src/navigations/stacknav';

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={'red'}/>
        <Stacknav />
      </View>
    </Provider>
  );
}
