import {Colors} from '../../../themes/colors';
import {Fonts} from '../../../themes/fonts';
import {StyleSheet} from 'react-native';

export const createStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? Colors.bg_dark : Colors.bg_light,
    },
    logo: {
      width: '50%',
      height: '10%',
      marginTop: '60%',
      alignSelf: 'center',
      resizeMode: 'contain',
      tintColor: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
    },

    profile: {
      width: 100,
      height: 100,
      marginTop: 40,
      alignSelf: 'center',
      resizeMode: 'contain',
      borderRadius: 100,
    },
    name: {
      alignSelf: 'center',
      fontFamily: Fonts.R_Regular,
      fontSize: 20,
      color: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
      marginTop: 20,
    },
    switch: {
      alignSelf: 'center',
    },
    switch_txt: {
      color: Colors.btn_clr,
      fontFamily: Fonts.R_bold,
      fontSize: 20,
    },
    signUP_view: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      height: 100,
      width: '100%',
      borderTopColor: Colors.line_clr,
      borderTopWidth: 1,
      bottom: 0,
      position: 'absolute',
    },
    signUP: {
      color: Colors.grey_txt,
      fontSize: 16,
    },
    signUP_txt: {
      color: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
      fontSize: 16,
    },
  });
