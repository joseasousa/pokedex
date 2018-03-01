import React from 'react'

const Pokemon = ({ pokemon }) => (
  <div>
    <img src={pokemon.sprites.front_default} />
  </div>
)

export default Pokemon
