import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { signOutStart } from '../../redux/user/user.actions'
import { selectIsCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'

const Header = ({ currentUser, isCartHidden, signOutStart }) => (
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
        <>
          <span className="option" onClick={signOutStart}>
            Sign Out
          </span>
          <span className="photo">
            <img src={currentUser.photoURL} alt="user" />
          </span>
        </>
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartHidden: selectIsCartHidden,
})

export default connect(mapStateToProps, { signOutStart })(Header)
