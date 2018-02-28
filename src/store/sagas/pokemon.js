import api from '../../services/api'

import { call, put } from 'redux-saga/effects'

import ActionCreators from '../ducks/pokemon'

export function * getPokemons () {
  const response = yield call(api.get, '/pokemon')

  if (response.ok) {
    const pokemons = response.data.results.map(async item =>
      getIndividualPoke(item.url))

    const resul = yield Promise.all(pokemons)
    yield put(ActionCreators.pokemonSuccess(resul))
  } else {
    yield put(ActionCreators.pokemonFailure())
  }
}

const getIndividualPoke = async url => {
  const pokemon = await api.get(url)
  if (pokemon.ok) {
    return pokemon.data
  } else {
    return pokemon.problem
  }
}