import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            BoxObjectModel
        </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
   title: {
    // padding: 50,
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginHorizontal: 10,
    fontSize: 20,
    // width: 150,
    borderWidth: 10,
   } 
});