import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

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

export default () => createStore(rootReducer, applyMiddleware(thunk, createLogger()));
