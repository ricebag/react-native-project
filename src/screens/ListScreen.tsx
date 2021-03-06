import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Button, Alert } from 'react-native';
import { connect, useStore } from 'react-redux';
import _ from 'lodash';
import { FontAwesome } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import { Film } from '../actions/films'
import { removeFilm } from '../actions/watch-list'

class ListScreen extends Component {
  render() {
    const { watchList, removeFilm } = this.props

    const Item = ({ title, imdbID }: { title: string, imdbID: string }) => (
      <View style={styles.item} key={imdbID}>
        <Text >{title}</Text>
        <FontAwesome name="minus" color='black' size={24} onPress={() => removeFilm(imdbID)} />
      </View>
    )

    const renderItem = ({ item, index }: { item: Film, index: number }) =>
      (<Item title={item.Title} key={item.imdbID} imdbID={item.imdbID} />)

    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is a list of breakfast items</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <SafeAreaView style={styles.container}>
          <FlatList
            data={watchList}
            renderItem={renderItem}
            keyExtractor={item => item.imdbID}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  films: state.films,
  selectedFilm: state.selectedFilm,
  watchList: state.watchList
});

const mapDispatchToProps = ({
  removeFilm
})

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)

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
