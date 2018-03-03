import React from 'react'

const Pokemon = ({ pokemon }) => (
  <div>
    {console.log('pokemon:', pokemon)}
    <img
      src={pokemon.sprites.front_default}
      alt={pokemon.name}
    />
  </div>
)

export default Pokemon
