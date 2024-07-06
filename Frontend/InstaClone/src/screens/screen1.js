import React from 'react';
import { View, Button, StyleSheet , Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setSystemTheme,setDarkTheme, setLightTheme } from '../redux/themeSlice/themeslice';

const ScreenOne = () => {
    const theme = useSelector((state) => state.theme);
  const styles = createStyles(theme);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button title="System Default Theme" onPress={() => dispatch(setSystemTheme())} />
      <Button title="Dark Theme" onPress={() => dispatch(setDarkTheme())} />
      <Button title="Light Theme" onPress={() => dispatch(setLightTheme())} />
      <Text style={styles.text}>This is Screen Two</Text>
    </View>
  );
};

export default ScreenOne;

const createStyles = (theme) =>
    StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize:25,
      color: theme === 'dark' ? '#000' : '#fff',
    
    },
});
