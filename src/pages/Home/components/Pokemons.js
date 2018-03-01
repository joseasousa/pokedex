import React from 'react'
import Pokemon from './Pokemon'

const Pokemons = ({ pokemons }) => (
  <div>
    {
      pokemons.map((pokemon, i) =>
        <Pokemon key={i} pokemon={pokemon} />)
    }
  </div>
)

export default Pokemons
