import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Colors} from '../themes/colors';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {InstaLogo} from '../themes/images';

const Header = () => {
  const theme = useSelector(state => state.theme);
  const styles = createStyle(theme);
  return (
    <View style={styles.container}>
      <Image source={InstaLogo} style={styles.logo} />
      <View style={styles.icon_view}>
        <TouchableOpacity>
          <Icon name="heart" size={25} style={styles.like} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.messanger}>
          <Icon name="facebook-messenger" size={25} style={styles.messanger} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const createStyle = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: 'red',
      // backgroundColor: theme === 'dark' ? Colors.bg_dark : Colors.bg_light,
      height: 60,
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    logo: {
      width: '40%',
      height: 50,
      marginLeft: 10,
      tintColor: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
      resizeMode: 'contain',
    },
    icon_view: {
      flexDirection: 'row',
      marginRight: 10,
    },
    like: {
      marginRight: 10,
      color: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
    },
    messanger: {
      color: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
      marginLeft: 7,
    },
  });
export default Header;
