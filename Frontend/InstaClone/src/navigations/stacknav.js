import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ProfileLogin from '../screens/Authentication/ProfileLogin';
import Login from '../screens/Authentication/Login';
import Main from '../screens/Main/main';
import StoryScreen from '../screens/Bottom-tabs/Home/storyScreen';

const stack = createNativeStackNavigator();

const Stacknav = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="MainScreen"
        screenOptions={{headerShown: false}}>
        <stack.Screen name="ProfileLogin" component={ProfileLogin} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="storyScreen" component={StoryScreen} />
        <stack.Screen name="MainScreen" component={Main} />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default Stacknav;
