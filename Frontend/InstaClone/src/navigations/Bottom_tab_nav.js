import {StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Bottom-tabs/Home/Home';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import Search from '../screens/Bottom-tabs/search/search';
import AddPost from '../screens/Bottom-tabs/AddPost/AddPost';
import Reels from '../screens/Bottom-tabs/Reels/Reels';
import Profile from '../screens/Bottom-tabs/Profile/Profile';
import { useSelector } from 'react-redux';
import { Colors } from '../themes/colors';

const Stack = createBottomTabNavigator();

const BottomTabNav = () => {
  const theme = useSelector(state => state.theme);
  return (
    <Stack.Navigator
      screenOptions={({route,theme}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'white',
        tabBarStyle: {
          
          
          
          
          
          backgroundColor: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
          
          height: 90,
          
          ...styles.shadow,
          
          },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            // iconName = focused ? 'home-sharp' : 'home-outline';
            // return <Ionicons name={iconName} size={40} color={color} />;
            return focused ? (
              <Foundation name="home" size={40} color={color} />
            ) : (
              <Octicons name="home" size={35} color={color} />
            );
          } else if (route.name === 'Search') {
            return  focused ?(<FontAwesome name="search" size={35} color={color} />):
            (<Feather name="search" size={35} color={color} />)
          
            
          } else if (route.name === 'AddPost') {
            return <Octicons name="diff-added" color={color} size={30} />;

          } else if (route.name === 'Reels') {
            iconName = focused ? 'movie' : 'movie-outline';
              return <MaterialCommunityIcons
                name={iconName}
                color={color}
                size={35}
              />
          } else if (route.name === 'Profile') {
            return (
              <MaterialCommunityIcons
                name="face-man-profile"
                color={color}
                size={30}
              />
            );
          }
        },
      })}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="AddPost" component={AddPost} />
      <Stack.Screen name="Reels" component={Reels} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow:{
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
export default BottomTabNav;
