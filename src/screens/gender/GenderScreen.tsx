import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { styles } from './styles';
import MaleIcon from '../../components/svg/MaleIcon';
import { View, Text } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import FemaleIcon from '../../components/svg/FemaleIcon';

const GenderScreen = () => {
  const navigate = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Select your gender" />
      <View style={styles.iconWrapperMain}>
        <View style={styles.icon_wrapper}>
          <MaleIcon width={70} height={70} color="#161515" />
          <Text style={styles.text}>Male</Text>
        </View>
        <View style={styles.icon_wrapper2}>
          <FemaleIcon width={70} height={70} color="#161515" />
          <Text style={styles.text}>Female</Text>
        </View>
      </View>
      <View style={styles.button_Wreapper}>
        <PrimaryButton
          handleNext={() => navigate.navigate('BodyParameter')}
          text="Continue"
        />
      </View>
    </SafeAreaView>
  );
};

export default GenderScreen;
