import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './pages/NotFound'

import Home from './pages/Home'
import AddPokemon from './pages/AddPokemon'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route exact path='/addPokemon' render={() => <AddPokemon />} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
