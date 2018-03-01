import React from 'react'
import Pokemon from './Pokemon'

const Pokemons = ({ pokemons }) => (
  <div>
    {
      pokemons.map(pokemon =>
        <Pokemon key={pokemon.id} pokemon={pokemon} />)
    }
  </div>
)

export default Pokemons
