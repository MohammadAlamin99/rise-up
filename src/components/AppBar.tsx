import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const AppBar = () => {
  const navigation = useNavigation<any>();
  return (
    
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>RiseUp</Text>
        <Text></Text>
      </View>
  )
}

const styles = StyleSheet.create({
      container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    alignItems: 'center',
  },
  skipText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'LufgaRegular',
    fontWeight: 500,
  },
    titleText: {
    color: 'white',
    fontSize: 38,
    fontFamily: 'LufgaMedium',
    fontWeight: 500,
  },
})

export default AppBar