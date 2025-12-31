import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './signinStyle';
import PrimaryButton from '../../components/PrimaryButton';

const SignupScreen = () => {
  const [remember, setRemember] = useState(false);
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
      {/* <PrimaryButton
        handleNext={handleNext}
        text="Sign in"
        button={styles.button}
        textButton={styles.buttonText}
      /> */}
    </SafeAreaView>
  );
};

export default SignupScreen;
