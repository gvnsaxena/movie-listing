import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import movieAPI from '../middleware/movie-listing-api'
import rootReducer from '../reducers/reducer'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, movieAPI)
    )
  )

  return store
}

export default configureStore
