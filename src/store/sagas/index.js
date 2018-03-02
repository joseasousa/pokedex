import { takeLatest } from 'redux-saga/effects'

import { Types as PokemonTypes } from '../ducks/pokemon'

import { getPokemons, getPokemon } from './pokemon'

export default function * root () {
  yield [
    takeLatest(PokemonTypes.POKEMON_REQUEST, getPokemons),
    takeLatest(PokemonTypes.POKEMON_FILTER, getPokemon)
  ]
}
