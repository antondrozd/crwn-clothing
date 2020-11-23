import { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import Header from './components/header/header.component'
import HomePage from './pages/home/home.page'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page'
import { setCurrentUser } from './redux/user/user.actions'

import './App.scss'

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userDocRef = await createUserProfileDocument(userAuth)

        userDocRef.onSnapshot((snapShot) => {
          const user = { id: snapShot.id, ...snapShot.data() }

          setCurrentUser(user)
        })
      } else {
        setCurrentUser(null)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </>
    )
  }
}

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser })

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
