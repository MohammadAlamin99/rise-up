
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './signinStyle'
import AppBar from '../../components/AppBar'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import PrimaryButton from '../../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
  const navigate = useNavigation<any>();
  const handleNext = () => {
    navigate.navigate('Home');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppBar/>

     <ScrollView
     showsVerticalScrollIndicator={false}
     >
       <AuthHeader active="signup"/>
      {/* form */}
       <View>
        <TextInput
          placeholder="Enter your first name"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your last name"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#999"
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm your password"
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>
      <PrimaryButton
        handleNext={handleNext}
        text="Sign Up"
        button={styles.button}
        textButton={styles.buttonText}
      />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigate.navigate('Signup')}>
            <Text style={styles.footerSign}>Sign up</Text>
          </TouchableOpacity>
        </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default SignUpScreen