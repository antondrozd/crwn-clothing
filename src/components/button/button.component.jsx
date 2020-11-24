import './button.styles.scss'

const Button = ({ children, isGoogleSignIn, inverted, ...restProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn && 'google-sign-in'
    } custom-button`}
    {...restProps}
  >
    {children}
  </button>
)

export default Button
