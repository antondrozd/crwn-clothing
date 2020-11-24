import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'

const Header = ({ currentUser, isCartHidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        Shop
      </Link>
      <Link to="/contact" className="option">
        Contact
      </Link>
      {currentUser ? (
        <span className="option" onClick={() => auth.signOut()}>
          Sign Out
        </span>
      ) : (
        <Link to="/signin" className="option">
          Sign In
        </Link>
      )}
      <CartIcon />
    </div>
    {!isCartHidden && <CartDropdown />}
  </div>
)

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  isCartHidden: state.cart.hidden,
})

export default connect(mapStateToProps)(Header)
