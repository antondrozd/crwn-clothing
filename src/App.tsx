import { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Header from './components/header/header.component'
import HomePage from './pages/home/home.page'
import ShopPage from './pages/shop/shop.page'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page'
import CheckoutPage from './pages/checkout/checkout.page'
import { checkUserSession } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

import './App.scss'

const App = () => {
	const currentUser = useSelector(selectCurrentUser)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(checkUserSession())
	}, [dispatch])

	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route
					path="/signin"
					render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
				/>
				<Route path="/checkout" component={CheckoutPage} />
			</Switch>
		</>
	)
}

export default App
