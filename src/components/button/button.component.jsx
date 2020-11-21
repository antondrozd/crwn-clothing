import './button.styles.scss'

const Button = ({ children, ...restProps }) => (
  <button className={'custom-button'} {...restProps}>
    {children}
  </button>
)

export default Button
