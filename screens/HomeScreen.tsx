import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { default as DoggyImage } from '../components/DoggyImage'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Text>Here's a picture of a Chocolate Lab to keep you company</Text>
      <DoggyImage />
      <Text>DAMN BOY</Text>
      <Text>HE THICK BOY</Text>
      <Text>THAT'S A THICK ASS BOYYYYYYYY</Text>
      {/* <EditScreenInfo path="/screens/HomeScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
