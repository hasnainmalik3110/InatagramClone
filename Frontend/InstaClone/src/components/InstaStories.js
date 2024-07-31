import React from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {a, arslan, asad, ashraf, b, c, d, e, Imrankhan, profilePic, umar} from '../themes/images';
import {Colors} from '../themes/colors';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const stories = [
  {id: '1', image: ashraf, username: 'YourStory'},
  {id: '2', image: profilePic, username: 'hasnain'},
  // {id: '3', image: c, username: 'blossom0w0'},
  {id: '4', image: asad, username: 'asad'},
  {id: '5', image: e, username: 'anjuu'},
  {id: '6', image: umar, username: 'umar'},
  {id: '7', image: arslan, username: 'arslan'},
  {id: '8', image: d, username: 'anaya'},
];

const StoryItem = ({story, styles, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.storyItem}
      onPress={() => navigation.navigate('storyScreen')}>
      <LinearGradient
        colors={[
          
          Colors.insta_theme_purple,
          Colors.insta_theme_pink,
          Colors.insta_theme_orange,
          Colors.insta_theme_yellow,
          // Colors.insta_theme_blue,
        ]}
        style={styles.gradient}>
        <View style={styles.imageContainer}>
          <Image source={story.image} style={styles.storyImage} />
          {story.username === 'YourStory' && (
            <TouchableOpacity style={styles.icon}>
              <AntDesign name="pluscircle" size={24} color={Colors.btn_clr} />
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>
      <Text style={styles.storyUsername}>{story.username}</Text>
    </TouchableOpacity>
  );
};

const StoryList = () => {
  const navigation = useNavigation();
  const theme = useSelector((state) => state.theme.theme);
  const styles = style(theme);

  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        
        renderItem={({item}) => (
          <StoryItem story={item} styles={styles} navigation={navigation} />
        )}
      />
    </View>
  );
};

const style = theme =>
  StyleSheet.create({
    container: {
      height: 115,
      paddingTop: 11,
      backgroundColor: theme === 'dark' ? Colors.bg_dark : Colors.bg_light,
      
    },
    storyItem: {
      width: 70,
      height: 90,
      marginHorizontal: 20,
      alignItems: 'center',
      marginRight: 5,
    },
    imageContainer: {
      position: 'relative',
      width: 80,
      height: 80,
    },
    icon: {
      position: 'absolute',
      bottom: 0,
      right: -1,
      backgroundColor: Colors.bg_light,
      borderRadius: 20,
    },
    storyImage: {
      width: 80,
      height: 80,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: theme === 'dark' ? Colors.bg_dark : Colors.bg_light,
      resizeMode: 'contain',
    },
    storyUsername: {
      marginTop: 2,
      fontSize: 12,
      color: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
      textAlign: 'center',
    },
    gradient: {
      height: 84,
      width: 84,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
  });

export default StoryList;
