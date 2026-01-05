import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const SeconderyButton = ({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    padding: 18,
    borderRadius: 100,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCFA4C',
    color: '#CCFA4C',
  },
  textButton: {
    color: '#CCFA4C',
    fontSize: 18,
    fontFamily: 'LufgaMedium',
    fontWeight: 500,
  },
  container: {
    marginInline: 16,
  },
});

export default SeconderyButton;
