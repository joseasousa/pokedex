import api from '../../services/api'

import { call, put } from 'redux-saga/effects'

import ActionCreators from '../ducks/pokemon'

export function * getPokemons () {
  const response = yield call(api.get, '/pokemon')

  if (response.ok) {
    yield put(ActionCreators.pokemonSuccess(response.data))
  } else {
    yield put(ActionCreators.pokemonFailure())
  }
}
