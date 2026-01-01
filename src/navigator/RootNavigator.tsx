import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import Onboarding from '../screens/onboarding/Onboarding';
import SignupScreen from '../screens/auth/SignInScreen';
import Home from '../screens/Home';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  signup: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
