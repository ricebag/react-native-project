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
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  // console.log({ data, Config, config });
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
    console.log('Left', { nextFilm, selectedFilm })
    return nextFilm(selectedFilm)
  }

  render() {
    const { films, watchList } = this.props
    console.log('were here', { films, watchList })

    return (
      <View style={styles.container}>
        <FilmCard film={this.props.selectedFilm} />
        {/* {abc} */}
        <Button color='red' onPress={this.RemoveFromOptions} title="Left">Left</Button>
        <Button color='green' onPress={this.AddtoList}>

          <FontAwesome name="plus" color='black' size={24} />
          {/* <FontAwesome name="plus" size={24} color="black" /> */}
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  films: state.films,
  selectedFilm: state.selectedFilm,
  watchList: state.watchList
});

const mapDispatchToProps = (dispatch: Function, state: Function) => {
  const store = useStore()
  return {
    addToWatchList: addToWatchList(dispatch, store.getState),
    fetchFilmsList: fetchFilmsList(dispatch, store.getState),
    nextFilm: nextFilm(dispatch, store.getState),
  }
}

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
