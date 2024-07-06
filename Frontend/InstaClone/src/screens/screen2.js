import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const ScreenTwo = () => {
  const theme = useSelector((state) => state.theme);
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Screen Two</Text>
    </View>
  );
};

export default ScreenTwo;

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#333' : '#FFF',
    },
    text: {
      color: theme === 'dark' ? '#FFF' : '#000',
    },
  });
