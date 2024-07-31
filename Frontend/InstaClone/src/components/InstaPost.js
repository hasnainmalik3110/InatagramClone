import {
  Alert,
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  arslan,
  asad,
  ashraf,
  b,
  c,
  Imrankhan,
  story1,
  video2,
} from '../themes/images';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Colors} from '../themes/colors';
import {useSelector} from 'react-redux';
import Video from 'react-native-video';

const {height, width} = Dimensions.get('window');

const Posts = [
  {
    id: '1',
    type: 'image',
    profileImg: asad,
    name: 'asad',
    postImg: asad,
    time: '1 hour ago',
    caption: 'pti official! visual from Greenwhich university',
    likes: 100,
    comments: 20,
  },
  {
    id: '2',
    profileImg: Imrankhan,
    name: 'asad',
    postImg: Imrankhan,
    time: '1 hour ago',
    caption: 'pti official! visual from Greenwhich university',
    likes: 100,
    comments: 20,
  },
  {
    id: '3',
    profileImg: arslan,
    name: 'arslan',
    postImg: arslan,
    time: '1 hour ago',
    caption: 'pti official! visual from Greenwhich university',
    likes: 100,
    comments: 20,
  },
  {
    id: '4',
    profileImg: b,
    name: 'lily',
    postImg: story1,
    time: '1 hour ago',
    caption: 'pti official! visual from Greenwhich university',
    likes: 100,
    comments: 20,
  },
  {
    id: '5',
    profileImg: ashraf,
    name: 'ashraf',
    postImg: ashraf,
    time: '1 hour ago',
    caption: 'pti official! visual from Greenwhich university',
    likes: 100,
    comments: 20,
  },
  {
    id: '6',
    type: 'reel',
    profileImg: c,
    name: 'blossom0w0',
    postImg: video2,
    time: '1 hour ago',
    caption: 'pti official! visual from Greenwhich university',
    likes: 100,
    comments: 20,
  },
];

const InstaPost = () => {
  const theme = useSelector(state => state.theme.theme);
  const styles = style(theme);

  const [likedPostId, setLikedPostId] = useState(null);
  const [saveicon, setsaveicon] = useState(true);
  const [icon, seticon] = useState(true);
  const [sound, setsound] = useState(false); // Initial sound is off

  const likeAnimation = useSharedValue(1);

  const animatedLikeStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: likeAnimation.value}],
      opacity: likeAnimation.value,
    };
  });

  const handleLikePress = id => {
    setLikedPostId(likedPostId === id ? null : id);

    likeAnimation.value = 0.3;
    likeAnimation.value = withSpring(1, {
      damping: 10,
      stiffness: 200,
    });
  };

  const renderPostItem = ({item}) => (
    <View style={styles.postContainer}>
      {/* header */}
      <View style={styles.postheader}>
        <TouchableOpacity style={styles.profile}>
          <Image source={item.profileImg} style={styles.profile_img} />
          <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.more}>
          <Feather
            name="more-vertical"
            size={30}
            color={theme === 'dark' ? Colors.bg_light : Colors.bg_dark}
          />
        </TouchableOpacity>
      </View>

      {/* post */}
      {item.type === 'reel' ? (
        <View>
          <Video
            source={item.postImg}
            style={styles.post_video}
            muted={!sound} // Control sound here
            repeat={true}
            resizeMode="cover"
          />
          <TouchableWithoutFeedback
            onPress={() => {
              setsound(!sound);
            }}>
            <View style={styles.sound_icon}>
              {sound ? (
                <Ionicons
                  name="volume-high-sharp"
                  color={Colors.bg_light}
                  size={20}
                />
              ) : (
                <Ionicons
                  name="volume-mute"
                  color={Colors.bg_light}
                  size={20}
                />
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      ) : (
        <Image source={item.postImg} style={styles.post_img} />
      )}

      {/* footer */}
      <View style={styles.postfooter}>
        <View style={styles.icon_view}>
          <View style={styles.like_view}>
            {/* like button */}
            <Animated.View style={[styles.like, animatedLikeStyle]}>
              <TouchableWithoutFeedback
                onPress={() => handleLikePress(item.id)}>
                {likedPostId === item.id ? (
                  <AntDesign name="heart" color={'red'} size={25} />
                ) : (
                  <AntDesign
                    name="hearto"
                    color={theme === 'dark' ? Colors.bg_light : Colors.bg_dark}
                    size={25}
                  />
                )}
              </TouchableWithoutFeedback>
            </Animated.View>

            {/* message button */}
            <View style={styles.like}>
              <TouchableWithoutFeedback onPress={() => Alert.alert('pressed')}>
                <Feather
                  name="message-circle"
                  color={theme === 'dark' ? Colors.bg_light : Colors.bg_dark}
                  size={25}
                />
              </TouchableWithoutFeedback>
            </View>

            {/* share button */}
            <View style={styles.like}>
              <TouchableWithoutFeedback onPress={() => Alert.alert('pressed')}>
                <Feather
                  name="send"
                  color={theme === 'dark' ? Colors.bg_light : Colors.bg_dark}
                  size={25}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.like}>
            <TouchableWithoutFeedback onPress={() => setsaveicon(!saveicon)}>
              {saveicon ? (
                <FontAwesome
                  name="bookmark-o"
                  color={theme === 'dark' ? Colors.bg_light : Colors.bg_dark}
                  size={25}
                />
              ) : (
                <FontAwesome
                  name="bookmark"
                  color={theme === 'dark' ? Colors.bg_light : Colors.bg_dark}
                  size={25}
                />
              )}
            </TouchableWithoutFeedback>
          </View>
        </View>
        <Text style={styles.likesText}>{item.likes} likes</Text>
        <Text style={styles.caption}>{item.caption}</Text>
        <TouchableWithoutFeedback onPress={() => Alert.alert('comments')}>
          <Text style={styles.commentText}>
            view all {item.comments} comments
          </Text>
        </TouchableWithoutFeedback>
        <View style={styles.commentCont}>
          <Image source={ashraf} style={styles.profile_img} />
          <TextInput style={styles.input} placeholder="Add a comment" />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Posts}
        renderItem={renderPostItem}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
      />
    </View>
  );
};

const style = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme === 'dark' ? Colors.bg_dark : Colors.bg_light,
      flex: 1,
    },
    postContainer: {},
    postheader: {
      width: '100%',
      height: 40,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginTop: 8,
    },
    profile: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profile_img: {
      height: 40,
      width: 40,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: 'white',
      resizeMode: 'cover',
    },
    name: {
      fontSize: 16,
      fontWeight: '600',
      marginLeft: 10,
      color: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
    },
    more: {
      marginRight: 10,
    },
    post_img: {
      width: '100%',
      height: 390,
      resizeMode: 'cover',
      marginTop: 10,
    },
    post_video: {
      width: width,
      height: 600,
      resizeMode: 'cover',
      marginTop: 10,
    },
    sound_icon: {
      width: 30,
      height: 30,
      resizeMode: 'cover',
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      right: 10,
      bottom: 10,
    },
    postfooter: {
      width: '100%',
      paddingTop: 10,
      paddingHorizontal: 10,
      backgroundColor: theme === 'dark' ? Colors.bg_dark : Colors.bg_light,
      borderTopWidth: 1,
      borderTopColor: '#333',
    },
    icon_view: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    like_view: {
      flexDirection: 'row',
    },
    like: {
      marginRight: 15,
    },
    likesText: {
      color: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
      fontSize: 14,
    },
    caption: {
      color: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
      fontSize: 14,
    },
    commentText: {
      color: Colors.grey_txt,
      fontSize: 14,
    },
    commentCont: {
      width: '100%',
      padding: 10,
      flexDirection: 'row',
    },
    input: {
      width: '20%',
      marginLeft: 10,
      color: theme === 'dark' ? Colors.bg_light : Colors.bg_dark,
      flex: 1,
    },
  });

export default InstaPost;
