import React, { Component } from 'react'

import { connect } from 'react-redux'
import pokemonActions from '../../store/ducks/pokemon'

class Home extends Component {
  componentDidMount () {
    this.props.pokemonRequest()
  }

  render () {
    return (
      <div>
        <h1>
          Home
        </h1>
        <strong>pagina inicial</strong>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemon
})

const mapDispatchToProps = dispatch => ({
  pokemonRequest: () => dispatch(pokemonActions.pokemonRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
