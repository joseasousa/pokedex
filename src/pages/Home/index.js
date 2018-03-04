import React, { Component } from 'react'
import { FloatingActionButton } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'
import CircularProgress from 'material-ui/CircularProgress'
import { connect } from 'react-redux'
import pokemonActions from '../../store/ducks/pokemon'
import { withRouter } from 'react-router'

import Pokemons from './components/Pokemons'

const style = {
  marginRight: 20,
  position: 'fixed',
  bottom: 40,
  right: 40
}

class Home extends Component {
  componentDidMount () {
    // this.props.pokemonRequest()
  }

  render () {
    const { loading, error, data } = this.props.pokemons
    return (
      <div>
        <FloatingActionButton
          backgroundColor='red'
          style={style}
          onClick={() => this.props.history.push('/addPokemon')}
        >
          <ContentAdd />
        </FloatingActionButton>

        <div>
          {error && (
            <h1>{console.error(error)}</h1>
          )}
        </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
