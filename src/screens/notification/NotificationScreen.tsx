import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import Notification from '../../components/svg/Notification';
import SeconderyButton from '../../components/SeconderyButton';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

const NotificationScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* header */}
      <Header text="Notification" border={false} />
      {/* body */}
      <View style={styles.container}>
        <Notification />
        <Text style={styles.text}>Rise Up & Stay On Track!</Text>
        <Text style={styles.text2}>
          Turn on notifications to get workout alerts, daily motivation, and
          progress milestones.
        </Text>
      </View>
      {/* button */}
      <View>
        <SeconderyButton
          text="Maybe later"
          onPress={() => navigation.navigate('Gender')}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton
            handleNext={() => {}}
            text="Grant Access"
            variant="primary"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
