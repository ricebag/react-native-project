import React, { useEffect, useState, Component } from 'react';
import { Button, StyleSheet } from 'react-native';
import { connect, useStore } from 'react-redux';
import _ from 'lodash';
import { FontAwesome } from '@expo/vector-icons';

import { View } from '../components/Themed';
import { default as FilmCard } from '../components/FilmCard'
import { fetchFilmsList } from '../actions/films'
import { addToWatchList, nextFilm } from '../actions/watch-list'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.AddtoList = this.AddtoList.bind(this)
    this.RemoveFromOptions = this.RemoveFromOptions.bind(this)
  }

  async componentDidMount() {
    const { films, fetchFilmsList } = this.props
    if (_.isEmpty(films)) return fetchFilmsList()
  }

  AddtoList() {
    const { addToWatchList, selectedFilm } = this.props
    return addToWatchList(selectedFilm)
  }

  RemoveFromOptions() {
    const { nextFilm, selectedFilm } = this.props
    return nextFilm(selectedFilm)
  }

  render() {
    const { films, watchList } = this.props

    return (
      <View style={styles.container}>
        <FilmCard film={this.props.selectedFilm} />

        <FontAwesome name="plus" color='black' size={24} onPress={this.AddtoList} />
        <FontAwesome name="minus" color='black' size={24} onPress={this.RemoveFromOptions} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  films: state.films,
  selectedFilm: state.selectedFilm,
  watchList: state.watchList
});

const mapDispatchToProps = ({
  addToWatchList,
  fetchFilmsList,
  nextFilm,
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

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
