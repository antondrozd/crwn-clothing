import './button.styles.scss'

const Button = ({ children, isGoogleSignIn, ...restProps }) => (
  <button
    className={`${isGoogleSignIn && 'google-sign-in'} custom-button`}
    {...restProps}
  >
    {children}
  </button>
)

export default Button
