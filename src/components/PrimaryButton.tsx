import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';

type ButtonVariant = 'primary' | 'secondary';

const variantStyles: Record<
  ButtonVariant,
  { container: ViewStyle; text: TextStyle }
> = {
  primary: {
    container: { backgroundColor: '#CCFA4C' },
    text: { color: '#161515' },
  },
  secondary: {
    container: { backgroundColor: '#161515' },
    text: { color: '#ffffff' },
  },
};

const PrimaryButton = ({
  handleNext,
  text,
  variant = 'primary',
}: {
  handleNext?: () => void;
  text: string;
  variant?: ButtonVariant;
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, variantStyles[variant].container]}
        onPress={handleNext}
      >
        <Text style={[styles.buttonText, variantStyles[variant].text]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    padding: 18,
    borderRadius: 100,
    alignItems: 'center',
    width: '100%',
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'LufgaMedium',
    fontWeight: '500',
  },
});

export default PrimaryButton;
