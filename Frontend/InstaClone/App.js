import { StatusBar } from 'react-native';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { store } from './src/redux/store';
import Stacknav from './src/navigations/stacknav';
import { Colors } from './src/themes/colors';
import ThemeListener from './src/redux/themelistener';

function App() {
  return (
    <Provider store={store}>
      <ThemeListener />
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBarComponent />
        <Stacknav />
      </SafeAreaView>
    </Provider>
  );
}

const StatusBarComponent = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <StatusBar backgroundColor={theme === 'dark' ? Colors.bg_dark : Colors.bg_light} />
  );
};

export default App;
