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
          <Text style={styles.card_Tittle}>Your Weight</Text>
          <View style={styles.box}>
            <Text style={styles.number}>26</Text>
            <Text style={styles.activeNumber}>26</Text>
            <Text style={styles.number}>26</Text>
          </View>
          <Text style={styles.card_Tittle}>kg</Text>
        </View>
        {/* card list three */}
        <View style={styles.card}>
          <Text style={styles.card_Tittle}>Your Height</Text>
          <View style={styles.box_Twoin_Wrapper}>
            <View style={styles.box}>
              <Text style={styles.number}>26</Text>
              <Text style={styles.activeNumber}>26</Text>
              <Text style={styles.number}>26</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.number}>26</Text>
              <Text style={styles.activeNumber}>26</Text>
              <Text style={styles.number}>26</Text>
            </View>
          </View>
          <View style={styles.number_wrapper}>
            <Text style={styles.card_Tittle}>feet</Text>
            <Text style={styles.card_Tittle}>inc</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BodyParameterScreen;
