import {Image, StyleSheet, View} from 'react-native';
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

import { ashraf, profilePic } from '../themes/images';

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
          
          
          
          
          
          backgroundColor: theme === 'dark' ? Colors.bg_dark : Colors.bg_light,
          
          height: 70,
          position: 'absolute',
          paddingBottom: 20,
          
          ...styles.shadow,
          
          },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            // iconName = focused ? 'home-sharp' : 'home-outline';
            // return <Ionicons name={iconName} size={40} color={color} />;
            return focused ? (
              <Foundation name="home" size={30} color={
                theme === 'dark' ? Colors.bg_light : Colors.bg_dark
              } />
            ) : (
              <Octicons name="home" size={30} color={
                theme === 'dark' ? Colors.bg_dark : Colors.bg_light} />
            );
          } else if (route.name === 'Search') {
            return  focused ?(<FontAwesome name="search" size={30} color={color} />):
            (<Feather name="search" size={30} color={
              theme === 'dark' ? Colors.bg_light : Colors.bg_dark
            } />)
          
            
          } else if (route.name === 'AddPost') {
            return <Octicons name="diff-added" color={
              theme === 'dark' ? Colors.bg_light : Colors.bg_dark
            } size={27} />;

          } else if (route.name === 'Reels') {
            iconName = focused ? 'movie' : 'movie-outline';
              return <MaterialCommunityIcons
                name={iconName}
                color={
                  theme === 'dark' ? Colors.bg_light : Colors.bg_dark
                }
                size={30}
              />
          } else if (route.name === 'Profile') {
            return (
              <Image source={ashraf}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                resizeMode: 'cover',
                }}
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

const themeColor = (theme) => theme === 'dark' ? Colors.bg_dark : Colors.bg_light;


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
