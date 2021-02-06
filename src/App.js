import { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './components/header/header.component'
import HomePage from './pages/home/home.page'
import ShopPage from './pages/shop/shop.page'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page'
import CheckoutPage from './pages/checkout/checkout.page'
import { checkUserSession } from './redux/user/user.actions'

import './App.scss'

class App extends Component {
  componentDidMount() {
    this.props.checkUserSession()
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
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
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
      </>
    )
  }
}

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser })

export default connect(mapStateToProps, { checkUserSession })(App)
