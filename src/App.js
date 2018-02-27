import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Route exact path='/'render={() => <Home />} />
      </div>
    )
  }
}

export default App
