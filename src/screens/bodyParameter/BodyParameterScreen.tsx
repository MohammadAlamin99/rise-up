import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import styles from './styles';
import { View } from 'react-native';

const BodyParameterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Body parameters" />
      <View style={styles.border}></View>
    </SafeAreaView>
  );
};

export default BodyParameterScreen;
