import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import CustomPicker from '../../components/CustomPicker';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

const BodyParameterScreen: React.FC = () => {
  const [age, setAge] = useState<number>(25);
  const [weightInt, setWeightInt] = useState<number>(73);
  const [weightDec, setWeightDec] = useState<number>(0);
  const [heightCm, setHeightCm] = useState<number>(165);
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const navigate = useNavigation<any>()

  // Generate Data Ranges
  const ages: number[] = Array.from({ length: 80 }, (_, i) => i + 10);
  const weights: number[] = Array.from({ length: 150 }, (_, i) => i + 30);
  const decimals: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const heights: number[] = Array.from({ length: 100 }, (_, i) => i + 130);
  const heightfeet: number[] = Array.from({ length: 10 }, (_, i) => i + 5);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
       <View style={styles.MainHeader}>
         <Header text="Body parameters" />
       </View>
      <View style={styles.dividerWrapper}>
        <View style={styles.divider} />
      </View>
      <ScrollView>
      <View style={styles.content}>
        {/* Age Section */}
        <ImageBackground
          style={styles.card}
          source={{
            uri: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400',
          }}
        >
          <View style={styles.overlay}>
            <Text style={styles.cardTitle}>Your Age</Text>
            <CustomPicker
              data={ages}
              selectedValue={age}
              onValueChange={setAge}
            />
            <Text style={styles.cardTitle}>Years</Text>
          </View>
        </ImageBackground>

        {/* Weight Section */}
        <ImageBackground
          style={styles.card}
          source={{
            uri: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400',
          }}
        >
          <View style={styles.overlay}>
            <Text style={styles.cardTitle}>Your Weight</Text>
            <View style={styles.row}>
              <CustomPicker
                data={weights}
                selectedValue={weightInt}
                onValueChange={setWeightInt}
              />
              <CustomPicker
                data={decimals}
                selectedValue={weightDec}
                onValueChange={setWeightDec}
              />
            </View>
             <Text style={styles.cardTitle}>kg</Text>
          </View>
        </ImageBackground>

        {/* Height Section */}
        <ImageBackground
          style={styles.card}
          source={{
            uri: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400',
          }}
        >
          <View style={styles.overlay}>
            <Text style={styles.cardTitle}>Your Height</Text>
            <View style={styles.row}>
              <CustomPicker
                data={heights}
                selectedValue={heightCm}
                onValueChange={setHeightCm}
              />
              <Text style={styles.orText}>or,</Text>
               <CustomPicker
                data={heightfeet}
                selectedValue={heightFeet}
                onValueChange={setHeightFeet}
              />
            </View>
            <View style={styles.heightUnitsRow}>
               <Text style={styles.cardTitle}>cm</Text>
               <Text style={styles.cardTitle}>feet</Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      </ScrollView>
      
      {/* Footer Actions */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.prevBtn} activeOpacity={0.7}
        onPress={()=>navigate.navigate('Gender')}
        >
          <Text style={styles.prevBtnText}>Previous</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.continueBtn} activeOpacity={0.7}
        onPress={()=>navigate.navigate('Goal')}
        >
          <Text style={styles.continueBtnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BodyParameterScreen;
