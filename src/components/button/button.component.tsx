import * as React from 'react'

import './button.styles.scss'

type PropsType = {
  isGoogleSignIn?: boolean
  inverted?: boolean
  className?: string
}

const Button: React.FC<PropsType & React.ComponentPropsWithoutRef<'button'>> = ({
  children,
  isGoogleSignIn,
  inverted,
  className,
  ...restProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button ${className}`.trim()}
    {...restProps}
  >
    {children}
  </button>
)

export default Button
