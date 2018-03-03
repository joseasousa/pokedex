import React, {Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import pokemonActions from '../../store/ducks/pokemon'
import CircularProgress from 'material-ui/CircularProgress'
import { connect } from 'react-redux'
import Pokemon from '../../Component/Pokemon'

const dataPoke = require('../../data/pokemons.json')

class AddPokemon extends Component {
  state = {
    fild: ''
  }
  handleUpdateInput = fild => {
    this.setState({
      fild
    })
  }

  handleNewRequest = () => {
    this.props.pokemonFilter(this.state.fild)
  }

  render () {
    const {data, loading} = this.props.pokemon
    return (
      <div>
        <AutoComplete
          openOnFocus
          hintText='Digeite o nome ou o id do pokemon'
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={dataPoke}
          searchText={this.state.fild}
        />
        
        {
          loading
            ? <CircularProgress color='red' />
            : <Pokemon pokemon={data} />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon
})

const mapDispatchToProps = dispatch => ({
  pokemonFilter: fild => dispatch(pokemonActions.pokemonFilter(fild))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPokemon)
