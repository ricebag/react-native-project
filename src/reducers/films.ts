import _ from 'lodash'

type Action = {
  type: string,
  payload: any
}

const filmsListReducer = (state = [], action: Action) => {
  switch (action.type) {
    case 'ADD_FILMS_LIST':
      return action.payload
    case 'ADD_FILMS_TO_LIST':
      return [
        ...state,
        action.payload
      ]
    case 'REMOVE_FILM_FROM_LIST':
      return _.filter(state, (film) => film.imdbID !== action.payload)
    case 'REMOVE_FILMS_LIST':
      return []
    default:
      return state
  }
}

export default filmsListReducer
