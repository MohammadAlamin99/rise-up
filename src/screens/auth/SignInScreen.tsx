import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './signinStyle';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [remember, setRemember] = useState(false);
  const navigation = useNavigation<any>();
  const handleNext = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* top header */}
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>RiseUp</Text>
        <Text></Text>
      </View>
      {/* sign in and sign up */}
      <View style={styles.signContainer}>
        <TouchableOpacity>
          <Text style={styles.signText}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity>
          <Text style={styles.signup}>Sign up</Text>
        </TouchableOpacity>
      </View>
      {/* form */}
      <View>
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter  your password"
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>
      {/* button */}
      <View style={styles.buttonContainer}>
        <View style={styles.rememberWrapper}>
          <Text style={styles.rememberText}>Remember me</Text>
          <TouchableOpacity
            onPress={() => setRemember(!remember)}
            activeOpacity={0.8}
          >
            <View
              style={[
                styles.circle,
                { backgroundColor: remember ? '#9EFF00' : '#161515' },
              ]}
            ></View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgetText}>Forgot password</Text>
        </TouchableOpacity>
      </View>
      {/* primary button */}
      <PrimaryButton
        handleNext={handleNext}
        text="Sign in"
        button={styles.button}
        textButton={styles.buttonText}
      />
      <View>
        <Text style={styles.orText}>or, sign in with</Text>
        </View>
        {/* social media */}
        <View style={styles.socialContainer}>
          <TouchableOpacity>
            <Text>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Apple</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
