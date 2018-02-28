import { combineReducers } from 'redux'
import configureStore from './configureStore'
import sagas from './sagas'
import { reducer as pokemon } from './ducks/pokemon'

export default () => {
  const rootReducer = combineReducers({
    pokemon
  })

  return configureStore(rootReducer, sagas)
}
