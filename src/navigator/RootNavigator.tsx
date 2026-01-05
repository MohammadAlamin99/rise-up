import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import Onboarding from '../screens/onboarding/Onboarding';
import SignInScreen from '../screens/auth/SignInScreen';
import Home from '../screens/Home';
import SignUpScreen from '../screens/auth/SignUpScreen';
import NotificationScreen from '../screens/notification/NotificationScreen';
import GenderScreen from '../screens/gender/GenderScreen';
import BodyParameterScreen from '../screens/bodyParameter/BodyParameterScreen';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Signin: undefined;
  Signup: undefined;
  Notification: undefined;
  Gender: undefined;
  BodyParameter: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Signin" component={SignInScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Gender" component={GenderScreen} />
      <Stack.Screen name="BodyParameter" component={BodyParameterScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
