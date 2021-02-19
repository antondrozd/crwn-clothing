import * as React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './sign-in.styles.scss'

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch()

  const { email, password } = userCredentials

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    dispatch(emailSignInStart({ email, password }))
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
