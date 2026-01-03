import {
  View,
  ImageBackground,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Onboarding = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation<any>();
  const data = [
    {
      image: require('../../../assets/images/onboarding1.jpg'),
      title: 'Welcome to RiseUp!',
      description:
        'your personal path to strength, confidence, and a healthier lifestyle. Every great journey starts with day one. ',
    },
    {
      image: require('../../../assets/images/onboarding2.jpg'),
      title: 'Progress Over Perfection',
      description:
        'It’s not about being the best, it’s about getting better every day. Small efforts lead to big changes.',
    },
    {
      image: require('../../../assets/images/onboarding3.jpg'),
      title: 'Define Your Goals',
      description:
        'Choose your fitness path, follow personalized workouts, and watch your transformation unfold.',
    },
    {
      image: require('../../../assets/images/onboarding4.jpg'),
      title: 'Transform Your Strength',
      description:
        'Push yourself to new limits, track progress, and celebrate every milestone.',
    },
  ];
  const onScroll = (event: any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slideIndex);
  };

  const handleNext = () => {
    if (activeIndex < data.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
    } else {
      navigation.navigate('Signin');
    }
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.image}
            style={[styles.image, { width, height }]}
            resizeMode="cover"
          >
            <SafeAreaView style={styles.container}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.pagination}>
                {data.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.dot,
                      activeIndex === index && styles.activeDot,
                    ]}
                  />
                ))}
              </View>
              <PrimaryButton
                handleNext={handleNext}
                text="Next"
                button={styles.button}
                textButton={styles.buttonText}
              />
            </SafeAreaView>
          </ImageBackground>
        )}
      />
    </View>
  );
};

export default Onboarding;
