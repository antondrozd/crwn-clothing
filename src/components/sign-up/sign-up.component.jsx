import { useState } from 'react'
import { useDispatch } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import { signUpStart } from '../../redux/user/user.actions'

import './sign-up.styles.scss'

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const dispatch = useDispatch()

  const { displayName, email, password, confirmPassword } = userCredentials

  const handleChange = (event) => {
    const { name, value } = event.target

    setUserCredentials({ ...userCredentials, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }

    dispatch(signUpStart({ displayName, email, password }))
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={displayName}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          handleChange={handleChange}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp
