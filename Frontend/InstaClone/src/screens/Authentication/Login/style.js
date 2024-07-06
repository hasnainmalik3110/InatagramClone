import { Fonts } from "../../../themes/fonts";
import { Colors } from "../../../themes/colors";
import { StyleSheet } from "react-native";

export const createStyles = theme =>
    StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme === 'dark' ? Colors.bg_dark : Colors.bg_light,
        padding: '5%',
      },
      logo: {
        width: '50%',
        height: '10%',
        alignSelf: 'center',
        resizeMode: 'contain',
        tintColor: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
      },
      forgot_P: {
        marginTop: 10,
        alignSelf: 'flex-end',
      },
      forgot_P_txt: {
        color: Colors.btn_clr,
        fontSize: 16,
        fontFamily: Fonts.R_bold,
      },
      btnEnabled: {
        opacity: 1,
      },
      btnDisabled: {
        opacity: 0.5,
      },
      fb_login: {
        marginTop: 20,
        flexDirection: 'row',
        alignSelf: 'center',
      },
      fb_logo: {
        width: 30,
        height: 30,
        tintColor: Colors.btn_clr,
      },
  
      logo_txt: {
        color: Colors.btn_clr,
        marginHorizontal: 10,
        marginTop: 5,
      },
      line_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 50,
      },
      OR_txt: {
        color: Colors.grey_txt,
        alignSelf: 'center',
        fontSize: 16,
        fontFamily: Fonts.R_bold,
      },
      signUP_view: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        borderTopColor: Colors.line_clr,
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
  

  