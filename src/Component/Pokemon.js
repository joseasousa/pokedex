import React from 'react'

import {
  Card,
  CardHeader,
  CardMedia,
  CardText
} from 'material-ui/Card'

const styles = {
  root: {
    width: 500,
    height: 450,
    alignItems: 'center'
  }
}

const Pokemon = ({ pokemon }) => (
  <div>
    <Card style={styles.root}>
      <CardHeader
        title={pokemon.name}
        subtitle={`#${pokemon.id}`}
      />
      <CardMedia>
        <img src={pokemon.sprites.front_default} alt='' />
      </CardMedia>
      <CardText />

    </Card>
  </div>
)

export default Pokemon
