import React, { Component } from 'react'

import { connect } from 'react-redux'
import pokemonActions from '../../store/ducks/pokemon'

import Pokemons from './components/Pokemons'

class Home extends Component {
  componentDidMount () {
    this.props.pokemonRequest()
  }

  render () {
    const { loading, error, data } = this.props.pokemons
    return (
      <div>
        <h1>
          Home
        </h1>
        {
          loading ?
            <h1>...Carregando</h1>
            : <Pokemons pokemons={data} />
        }
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
