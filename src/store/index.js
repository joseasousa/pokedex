import { combineReducers } from 'redux'
import configureStore from './configureStore'
import sagas from './sagas'

export default () => {
  const rootReducer = combineReducers({})

  return configureStore(rootReducer, sagas)
}
