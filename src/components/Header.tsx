import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = ({ text, border }: { text: string; border: boolean }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{text}</Text>
      {border && <View style={styles.border}></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginInline: 16,
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'LufgaMedium',
    fontWeight: 500,
    marginInline: 'auto',
    marginTop: 24,
  },
  border: {
    width: '100%',
    height: 1,
    backgroundColor: '#FFF',
    opacity: 0.3,
    marginTop: 13,
  },
});
export default Header;
