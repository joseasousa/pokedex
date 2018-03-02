import React, {Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import pokemonActions from '../../store/ducks/pokemon'
import { connect } from 'react-redux'

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

const mapStateToProps = state => ({
  pokemon: state.pokemon
})

const mapDispatchToProps = dispatch => ({
  pokemonRequest: filter => dispatch(pokemonActions.pokemonFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPokemon)
