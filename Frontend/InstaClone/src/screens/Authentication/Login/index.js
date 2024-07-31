import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {Colors} from '../../../themes/colors';
import {InstaLogo, fbLogo} from '../../../themes/images';
import Custom_Input from '../../../components/custom_input';
import {Fonts} from '../../../themes/fonts';
import Custom_btn from '../../../components/custom_btn';
import Line from '../../../components/line';
import { createStyles } from './style';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const theme = useSelector(state => state.theme);
  const styles = createStyles(theme);
  const isFormValid = username !== '' && password !== '';

  return (
    <SafeAreaView style={styles.container}>
      <Image source={InstaLogo} style={styles.logo} />
      <Custom_Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Custom_Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.forgot_P}>
        <Text style={styles.forgot_P_txt}>Forgot Password</Text>
      </TouchableOpacity>
      <Custom_btn
        title="Log in"
        disabled={!isFormValid}
        style={!isFormValid ? styles.btnDisabled : styles.btnEnabled}
      />
      <TouchableOpacity style={styles.fb_login}>
        <Image source={fbLogo} style={styles.fb_logo} />
        <Text style={styles.logo_txt}>Log in with Facebook</Text>
      </TouchableOpacity>
      <View style={styles.line_view}>
        <Line />
        <Text style={styles.OR_txt}> OR </Text>
        <Line />
      </View>
      <View style={styles.signUP_view}>
      <Text style={styles.signUP}>Don’t have an account?</Text>
      <TouchableOpacity>
      <Text style={styles.signUP_txt}> Sign up.</Text>
      </TouchableOpacity>
      <View/>
      </View>

    </SafeAreaView>
  );
};

export default Login