// Home.js
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import StoryList from '../../../components/InstaStories';
import Header from '../../../components/header';
import { Colors } from '../../../themes/colors';
import InstaPost from '../../../components/InstaPost';

const Home = () => {
  const theme = useSelector((state) => state.theme.theme);
  console.log('Current theme:', theme);
  const styles = createStyle(theme);
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <Header />
        <StoryList />
        <InstaPost />
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyle = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? Colors.bg_dark : Colors.bg_light,
    },
  });

export default Home;
