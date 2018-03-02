import React, {Component} from 'react'

import AutoComplete from 'material-ui/AutoComplete'

const data = require('../../data/pokemons.json')

class AddPokemon extends Component {
  render () {
    return (
      <div>
        <h1>oi</h1>
        <AutoComplete
          openOnFocus
          dataSource={data}
          fullWidth
        />
      </div>
    )
  }
}

export default AddPokemon
