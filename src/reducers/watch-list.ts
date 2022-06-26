import _ from 'lodash'
import { Film } from '../actions/films'

type Action = {
  type: string,
  payload: any
}

const watchListReducer = (state = [], action: Action) => {
  switch (action.type) {
    case 'ADD_TO_WATCH_LIST':
      return [
        ...state,
        action.payload
      ]
    case 'REMOVE_FROM_WATCH_LIST':
      return _.filter(state, (film: Film) => film.imdbID !== action.payload)
    default:
      return state
  }
}

export default watchListReducer
