import React, {Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import pokemonActions from '../../store/ducks/pokemon'
import CircularProgress from 'material-ui/CircularProgress'
import { connect } from 'react-redux'
import Pokemon from '../../Component/Pokemon'
import api from '../../services/api'
import { EditorFormatListBulleted } from 'material-ui';

const dataPoke = require('../../data/pokemons.json')

class AddPokemon extends Component {
  constructor(props){
    super(props)
    this.state = {
      fild: '',
      pokemon: {},
      loading: true,
      error: false
    }
  }

  handleUpdateInput = fild => {
    this.setState({
      fild
    })
  }

  handleNewRequest = async () => {
    const resul = await api.get(`/pokemon/${this.state.fild}`)

    if(resul.ok){
      this.setState({pokemon: resul.data,loading: false, error:false})
    }else{
      this.setState({error: true, loading: true})
    }
  }

  render () {
    const { pokemon, loading, error } = this.state
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
        { !loading
            && <Pokemon pokemon={pokemon} />
        }
      </div>
    )
  }
}

export default AddPokemon
