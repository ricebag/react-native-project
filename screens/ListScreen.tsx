import * as React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Button, Alert } from 'react-native';
import _ from 'lodash';

import { Text, View } from '../components/Themed';

const generateBreakfastItem = (list) => {
  const random = Math.floor(Math.random() * (list.length));
  console.log(random)
  return list[random].name
}

export default function ListScreen() {
  let list = [{ name: 'Bacon' }, { name: 'Pancakes' }, { name: 'Green tea' }, { name: 'Coffee' }, { name: 'Cucumber' }]

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text >{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.name} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is a list of breakfast items</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Button style={styles.title} title="+" onPress={()=> list = [...list, {name: 'bitch'}]}/>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      </SafeAreaView>

      <Button
        title="Pick Your Breakfast"
        // onPress={() => console.log(generateBreakfastItem(list))}
        onPress={() => Alert.alert(generateBreakfastItem(list))}
      // onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
