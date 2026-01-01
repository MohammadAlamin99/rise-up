import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../screens/auth/signinStyle';

const AuthHeader = ({
  active = 'signin',
}) => {
  return (
    <View style={styles.signContainer}>
      <TouchableOpacity>
        <Text
          style={[
            styles.signText,
            active === 'signin' && styles.activeText,
          ]}
        >
          Sign in
        </Text>
      </TouchableOpacity>

      <View style={styles.line} />

      <TouchableOpacity>
        <Text
          style={[
            styles.signup,
            active === 'signup' && styles.activeText,
          ]}
        >
          Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthHeader;
