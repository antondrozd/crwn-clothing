import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'

import Header from './components/header/header.component'
import HomePage from './pages/home/home.page'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </>
    )
  }
}

export default App
