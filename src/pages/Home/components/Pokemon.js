import React from 'react'

const Pokemon = ({ pokemon }) => (
  <div>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
  </div>
)

export default Pokemon
