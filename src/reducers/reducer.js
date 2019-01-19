import merge from 'lodash/merge';
import { combineReducers } from 'redux';

const MovieList = (state = {}, action) => {
  switch (action.type) {
    case 'API_REQUEST':
    case 'GET_NOW_PLAYING_API_URL_REQUEST':
      return merge({}, state, action.response)
      
    default:
      return state;
  }
}

const GenreList = (state = {}, action) => {
  switch (action.type) {
    case 'API_REQUEST':
    case 'GENRE_API_REQUEST':
      return merge({}, state, action.response)
      
    default:
      return state;
  }
}
const GenreSelectMovieList = (state = {}, action) => {
  switch (action.type) {
    case 'GENRE_SELECT':
    return (action.response)

    default:
      return state;
  }
}
const RatingSelectMovieList = (state = {}, action) => {
  switch (action.type) {
    case 'RATING_SELECT':
    return (action.value)

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  MovieList,
  GenreList,
  GenreSelectMovieList,
  RatingSelectMovieList
})

export default rootReducer