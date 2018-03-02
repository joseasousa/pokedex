import { createReducer, createActions } from 'reduxsauce'

/** Actions Types e Creators */
const { Types, Creators } = createActions({
  pokemonRequest: null,
  pokemonSuccess: ['data'],
  pokemonFailure: null,
  pokemonAdd: ['pokemon'],
  pokemonRemove: ['id'],
  pokemonFilter: ['search']
})

export { Types }
export default Creators

/* Initial State */

const initialState = {
  data: [],
  loading: false,
  error: null
}

/* Reducers */

export const request = state =>
  ({ ...state, loading: true })

export const filter = state =>
  ({ ...state, loading: true })

export const success = (state, action) => ({
  data: action.data,
  loading: false,
  error: null
})

export const failure = () => ({
  data: [],
  loading: false,
  error: true
})

const add = (state, action) =>
  [...state, action.payload.pokemon]

const remove = (state, action) =>
  state.filter((item) => item.id !== action.payload.id)

/* Reducers to types */

export const reducer = createReducer(initialState, {
  [Types.POKEMON_REQUEST]: request,
  [Types.POKEMON_SUCCESS]: success,
  [Types.POKEMON_FAILURE]: failure,
  [Types.POKEMON_ADD]: add,
  [Types.POKEMON_REMOVE]: remove,
  [Types.POKEMON_FILTER]: filter
})
