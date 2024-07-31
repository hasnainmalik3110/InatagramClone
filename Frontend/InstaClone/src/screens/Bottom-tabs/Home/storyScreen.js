import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  Text,
} from 'react-native';
import {
  palestine,
  profilePic,
  story1,
  story3,
  video1,
  video2,
  video3,
} from '../../../themes/images';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';

const { height, width } = Dimensions.get('window');

const StoryScreen = () => {
  const navigation = useNavigation();
  const [load, setLoad] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [content, setContent] = useState([
    {
      content: story1,
      type: 'image',
      finish: 0,
    },
    {
      content: video1,
      type: 'video',
      finish: 0,
    },
    {
      content: story3,
      type: 'image',
      finish: 0,
    },
    {
      content: video2,
      type: 'video',
      finish: 0,
    },
    {
      content: palestine,
      type: 'image',
      finish: 0,
    },
  ]);

  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    start();
  }, [current, load]);

  const start = () => {
    progress.setValue(0);
    const duration =
      content[current].type === 'video' && load
        ? videoDuration * 1000
        : 5000;

    Animated.timing(progress, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        next();
      }
    });
  };

  const next = () => {
    if (current < content.length - 1) {
      const tempData = [...content];
      tempData[current].finish = 1;
      setContent(tempData);
      setCurrent(current + 1);
    } else {
      close();
    }
  };

  const prev = () => {
    if (current - 1 >= 0) {
      const tempData = [...content];
      tempData[current].finish = 0;
      setContent(tempData);
      setCurrent(current - 1);
    } else {
      close();
    }
  };

  const close = () => {
    progress.setValue(0);
    navigation.goBack();
    console.log('Stories closed');
  };

  const handleNext = () => {
    progress.setValue(0); // Reset progress bar
    next();
  };

  const handlePrevious = () => {
    progress.setValue(0); // Reset progress bar
    prev();
  };

  return (
    <View style={styles.container}>
      {content[current].type === 'video' ? (
        <Video
          source={content[current].content}
          style={styles.video}
          resizeMode='cover'
          paused={false}
          onLoad={(data) => {
            setLoad(true);
            setVideoDuration(data.duration);
            start();
          }}
          onReadyForDisplay={() => {
            start();
          }}
        />
      ) : (
        <Image
          source={content[current].content}
          style={styles.image}
          onLoadEnd={() => {
            progress.setValue(0);
            start();
          }}
        />
      )}

      <View style={styles.indicator}>
        {content.map((item, index) => (
          <View key={index} style={styles.indicatorItem}>
            <Animated.View
              style={[
                styles.indicatorItemInner,
                {
                  flex: current === index ? progress : content[index].finish,
                },
              ]}
            />
          </View>
        ))}
      </View>
      <View style={styles.progress}>
        <TouchableOpacity
          style={styles.progressBarLeft}
          onPress={handlePrevious}
        >
          <View />
        </TouchableOpacity>
        <TouchableOpacity style={styles.progressBarRight} onPress={handleNext}>
          <View />
        </TouchableOpacity>
      </View>
      <View style={styles.profile_view}>
        <View style={styles.img_view}>
          <Image source={profilePic} style={styles.img} />
          <Text style={styles.name}>Hasnain</Text>
        </View>
        <TouchableOpacity style={styles.cross} onPress={close}>
          <Entypo name='cross' size={50} color={'#fff'} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  progress: {
    position: 'absolute',
    width: width,
    height: height,
    top: 100,
    flexDirection: 'row',
  },
  progressBarLeft: {
    width: '50%',
    height: '100%',
  },
  progressBarRight: {
    width: '50%',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  indicator: {
    position: 'absolute',
    top: 10,
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicatorItem: {
    height: 2,
    marginHorizontal: 2,
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flexDirection: 'row',
  },
  indicatorItemInner: {
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  profile_view: {
    width: width,
    height: 50,
    justifyContent: 'space-between',
    position: 'absolute',
    flexDirection: 'row',
    top: 30,
  },
  img_view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 40,
    height: 40,
    marginLeft: 20,
    borderRadius: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
    color: '#fff',
  },
  cross: {
    width: 50,
    height: 50,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  video: {
    height: height,
    width: width,
  },
});

export default StoryScreen;
