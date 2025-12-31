import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';

const PrimaryButton = ({
  handleNext,
  text,
  button,
  textButton,
}: {
  handleNext: () => void;
  text: string;
  button: StyleProp<ViewStyle>;
  textButton: StyleProp<TextStyle>;
}) => {
  return (
    <View>
      <TouchableOpacity style={button} onPress={handleNext}>
        <Text style={textButton}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
