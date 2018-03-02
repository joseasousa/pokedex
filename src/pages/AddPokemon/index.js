import React, {Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import pokemonActions from '../../store/ducks/pokemon'
import { connect } from 'react-redux'

const data = require('../../data/pokemons.json')

class AddPokemon extends Component {
  render () {
    return (
      <div>
        <AutoComplete
          openOnFocus
          hintText='Digeite o nome ou o id do pokemon'
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
