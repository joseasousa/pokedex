import React, { Component } from 'react'
import { FloatingActionButton }  from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'
import CircularProgress from 'material-ui/CircularProgress'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import pokemonActions from '../../store/ducks/pokemon'

import Pokemons from './components/Pokemons'

const style = {
  marginRight: 20,
  position: 'fixed',
  bottom: 40,
  right: 40
}

class Home extends Component {
  componentDidMount () {
    this.props.pokemonRequest('charmander')
  }

  render () {
    const { loading, error, data } = this.props.pokemons
    return (
      <div>
        <h1>
          Home
        </h1>
        <FloatingActionButton backgroundColor='red' style={style} >
          <ContentAdd />
        </FloatingActionButton>
        {
          loading
            ? <CircularProgress color='red' />
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
  pokemonRequest: (item) => dispatch(pokemonActions.pokemonRequest(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
