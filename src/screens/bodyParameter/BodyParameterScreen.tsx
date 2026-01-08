import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../components/Header';
import { Text, View } from 'react-native';

const BodyParameterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Body parameters" border={true} />
      {/* card */}
      <View style={styles.card_wrapper}>
        {/* card list one */}
        <View style={styles.card}>
          <Text style={styles.card_Tittle}>Your Age</Text>
          <View style={styles.box}>
            <Text style={styles.number}>26</Text>
            <Text style={styles.activeNumber}>26</Text>
            <Text style={styles.number}>26</Text>
          </View>
          <Text style={styles.card_Tittle}>years</Text>
        </View>
        {/* card list two */}
        <View style={styles.card}>
          <Text style={styles.card_Tittle}>Your Age</Text>
          <View style={styles.box}>
            <Text style={styles.number}>26</Text>
            <Text style={styles.activeNumber}>26</Text>
            <Text style={styles.number}>26</Text>
          </View>
          <Text style={styles.card_Tittle}>years</Text>
        </View>
        {/* card list three */}
        <View style={styles.card}>
          <Text style={styles.card_Tittle}>Your Age</Text>
          <View style={styles.box}>
            <Text style={styles.number}>26</Text>
            <Text style={styles.activeNumber}>26</Text>
            <Text style={styles.number}>26</Text>
          </View>
          <Text style={styles.card_Tittle}>years</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BodyParameterScreen;
