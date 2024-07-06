import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import ScreenOne from '../screens/screen1';
import ScreenTwo from '../screens/screen2';
import ScreenThree from '../screens/screen3';
import ProfileLogin from '../screens/Authentication/ProfileLogin';
import Login from '../screens/Authentication/Login';
import Main from '../screens/Main/main';
import HomeScr from '../screens/HomeScreen';

const stack = createNativeStackNavigator();

const Stacknav = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='MainScreen' screenOptions={{headerShown:false}}>
      <stack.Screen name="ProfileLogin" component={ProfileLogin} />
      <stack.Screen name="Login" component={Login} />
        <stack.Screen name="HomeScreen" component={HomeScr} />
        <stack.Screen name="MainScreen" component={Main} />
        <stack.Screen name="screen1" component={ScreenOne} />
        <stack.Screen name="screen2" component={ScreenTwo} />
        <stack.Screen name="screen3" component={ScreenThree} />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default Stacknav;
