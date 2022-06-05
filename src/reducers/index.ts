import { createStore, combineReducers } from 'redux';

import filmsReducer from './films';
import selectedFilmReducer from './selected-film';
import watchListReducer from './watch-list';

const rootReducer = combineReducers(
  {
    films: filmsReducer,
    selectedFilm: selectedFilmReducer,
    watchList: watchListReducer,
  }
);

export default () => createStore(rootReducer);
