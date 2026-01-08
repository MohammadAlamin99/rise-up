import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../components/Header';

const BodyParameterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Body parameters" border={true} />
    </SafeAreaView>
  );
};

export default BodyParameterScreen;
