import React, { useEffect } from 'react';
import {View, Text, Button, StyleSheet, Appearance, } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '../redux/themeSlice/themeslice';

const HomeScr = () => {

  useEffect(()=>{
    const ColorTheme=Appearance.getColorScheme();
    console.log(ColorTheme) 
  })
  
  const isDark = useSelector(state => state.theme.isDark);
  const dispatch = useDispatch();

  const styles = getStyles(isDark);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Home Screen</Text>
      <Button title="Toggle Theme" onPress={() => dispatch(setTheme())} />
    </View>
  );
};

const getStyles = isDark =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDark ? '#000' : '#fff',
    },
    text: {
      color: isDark ? '#fff' : '#000',
    },
  });

export default HomeScr;
