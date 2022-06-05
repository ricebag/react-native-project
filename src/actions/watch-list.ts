import { removeFilmFomList, updateSelectedFilm } from './films'
import { default as store } from '../reducers'

type Film = {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}
type Films = Film[]

export const addFilmToWatchList = (film: Film) => ({
  type: 'ADD_TO_WATCH_LIST',
  payload: film
})

export const removeFilmFromWatchList = (id: string) => ({
  type: 'REMOVE_FROM_WATCH_LIST',
  payload: id
})

export const addToWatchList = (dispatch: Function, getState: Function) => async (film: Film) => {
  try {
    const state = await getState()

    console.log({ state })
    const nextFilmId = Math.floor(Math.random() * state.films.length);
    const nextFilm = state.films[nextFilmId]
    console.log(nextFilm)

    dispatch(addFilmToWatchList(film))
    dispatch(removeFilmFomList(film.imdbID))
    dispatch(updateSelectedFilm(nextFilm))
  } catch (error) {
    console.error(error)
  }
}

export const nextFilm = (dispatch: Function, getState: Function) => async (film: Film) => {
  try {
    const state = await getState()

    console.log({ state, film })
    const nextFilmId = Math.floor(Math.random() * state.films.length);
    const nextFilm = state.films[nextFilmId]

    console.log({ state, nextFilm, nextFilmId, film })

    dispatch(removeFilmFomList(film.imdbID))
    dispatch(updateSelectedFilm(nextFilm))
  } catch (error) {
    console.error(error)
  }
}

export const removeFilm = (dispatch: Function, getState: Function) => async (imdbID: string) => {
  try {
    dispatch(removeFilmFromWatchList(imdbID))
  } catch (error) {
    console.error(error)
  }
}