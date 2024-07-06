// Custom_Input.js
import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from '../themes/colors';
import { Fonts } from '../themes/fonts';




const Custom_Input = ({ value, onChangeText, onFocus, onBlur, placeholder, leftImage, rightImage, secureTextEntry, ...rest }) => {
const theme=useSelector(state => state.theme)
const styles = createStyles(theme);

    const [isFocused, setIsFocused] = useState(false);
    

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    

    return (
        <View style={[styles.email_input_view, isFocused && styles.focus_input]}>
           
            <TextInput
                style={styles.email_input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={'#9E9E9E'}
                secureTextEntry={secureTextEntry && !showPassword}
                onFocus={handleFocus}
                onBlur={handleBlur}
                
                {...rest}
            />
            
        </View>
    );
};
const createStyles=theme=>
    StyleSheet.create({
    email_input_view: {
        backgroundColor: theme === 'dark' ? Colors.bg_input_dark : Colors.bg_input_light,
        borderColor: theme === 'dark' ?  Colors.input_br_dark : Colors.input_br_light,
        width: '100%',
        height: 60,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        borderRadius: 10,
        placeholderTextColor: "grey",
        borderWidth: 2,
        
        
    },
    focus_input:{
        borderWidth:2,
        

    },
    Active_input:{

    },email_input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 10,
        color: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
        fontSize:16,
        fontFamily: Fonts.R_Regular,
        
        
    },
})

export default Custom_Input;