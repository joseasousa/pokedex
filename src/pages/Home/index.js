import React, { Component } from 'react'
import { RaisedButton }  from 'material-ui'

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
        <RaisedButton primary label='Teste' /> 

        {
          loading
            ? <div className='preloader-wrapper big active'>
              <div className='spinner-layer spinner-red-only'>
                <div className='circle-clipper left'>
                  <div className='circle' />
                </div><div className='gap-patch'>
                  <div className='circle' />
                </div><div className='circle-clipper right'>
                  <div className='circle' />
                </div>
              </div>
            </div>
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
