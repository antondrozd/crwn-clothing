import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'

import Header from './components/header/header.component'
import HomePage from './pages/home/home.page'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends Component {
  state = {
    currentUser: null,
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userDocRef = await createUserProfileDocument(userAuth)

        userDocRef.onSnapshot((snapShot) => {
          const user = { id: snapShot.id, ...snapShot.data() }

          this.setState({ currentUser: user })
        })
      } else {
        this.setState({ currentUser: null })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
      </>
    )
  }
}

export default App
