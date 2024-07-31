import {View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Colors} from '../themes/colors';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {InstaLogo, messanger} from '../themes/images';


const Header = () => {
  const theme = useSelector((state) => state.theme.theme);
  const styles = style(theme);
  return (
    <View style={styles.container}>
      <Image source={InstaLogo} style={styles.logo} />
      <View style={styles.icon_view}>
        <TouchableWithoutFeedback>
          <Icon name="heart" size={22} style={styles.like} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Image source={messanger}  style={styles.messanger} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
const style = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: 'red',
      backgroundColor: theme === 'dark' ? Colors.bg_dark : Colors.bg_light,
      height: 50,
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingTop:12,
    },
    logo: {
      width: '30%',
      height: 40,
      tintColor: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
      resizeMode: 'contain',
      marginLeft:10,
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
      width: 22,
      height:22,
      tintColor: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
      marginHorizontal:12
    },
    
  });
export default Header;
