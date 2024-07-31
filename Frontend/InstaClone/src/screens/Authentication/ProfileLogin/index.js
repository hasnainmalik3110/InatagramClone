import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View,SafeAreaView} from 'react-native';
import React from 'react';

import { createStyles} from './style';
import {InstaLogo,  profilePic} from '../../../themes/images';

import Custom_btn from '../../../components/custom_btn';
import { useSelector } from 'react-redux';

const ProfileLogin = ({navigation}) => {
  const theme = useSelector(state => state.theme);
 
const styles = createStyles (theme);
  return (
    <safeAreaView style={styles.container}>
      <Image source={InstaLogo} style={styles.logo} />

      <Image source={profilePic} style={styles.profile} />
      <Text style={styles.name}>Hasnain</Text>

      <Custom_btn title="Log in" />

      <TouchableOpacity style={styles.switch}
      
      onPress={() => navigation.navigate('Login')}>
      <Text style={styles.switch_txt}>switch account</Text>
      </TouchableOpacity>
      <View style={styles.signUP_view}>
      <Text style={styles.signUP}>Don’t have an account?</Text>
      <TouchableOpacity>
      <Text style={styles.signUP_txt}> Sign up.</Text>
      </TouchableOpacity>
      </View>
    </safeAreaView>
  );
};


export default ProfileLogin;
