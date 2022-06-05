import _ from 'lodash'

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
      // return []
      const abc = _.filter(state, (film) => {
        console.log({ state, film, payload: action.payload })
        return film.imdbID !== action.payload
      })
      return abc
    default:
      return state
  }
}

export default watchListReducer
