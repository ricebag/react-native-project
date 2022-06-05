type Action = {
  type: string,
  payload: any
}

const selectedFilmReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case 'UPDATE_SELECTED_FILM':
      return action.payload
    case 'REMOVE_FILMS_LIST':
      return {}
    default:
      return state
  }
}

export default selectedFilmReducer

