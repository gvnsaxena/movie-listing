import { CALL_API } from '../middleware/movie-listing-api';
import {GET_NOW_PLAYING_API_URL_REQUEST, GENRE_API_REQUEST,
            API_REQUEST, API_ERROR, GENRE_SELECT, RATING_SELECT} from '../constants/constant';

const apiCall = (type, value) => ({
    [CALL_API]: {
      types: [API_REQUEST, type, API_ERROR],
      value
    }
})
export const getNowPlayingAPICall = (value) => (dispatch) => {
    return dispatch(apiCall(GET_NOW_PLAYING_API_URL_REQUEST, value))
}

export const getGenreAPICall = (value) => (dispatch) => {
    return dispatch(apiCall(GENRE_API_REQUEST, value))
}

export const getSelectedGenre = (value, requiredValue) => (dispatch) => {
    return dispatch({type: GENRE_SELECT , response:{value, requiredValue}});
}
export const getSelectedRating = (value,) => (dispatch) => {
    return dispatch({type: RATING_SELECT , value});
}