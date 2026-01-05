import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = ({ text }: { text: string }) => {
  return (
    <View>
      <Text style={styles.titleText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'LufgaMedium',
    fontWeight: 500,
    marginInline: 'auto',
    marginTop: 24,
  },
});
export default Header;
