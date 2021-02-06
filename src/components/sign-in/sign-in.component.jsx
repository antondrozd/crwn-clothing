import { Component } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions'

import './sign-in.styles.scss'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  initialState = this.state

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { emailSignInStart } = this.props
    const { email, password } = this.state

    emailSignInStart({ email, password })
    this.setState(this.initialState)
  }

  render() {
    const { googleSignInStart } = this.props
    const { email, password } = this.state

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <Button type="submit">Sign in</Button>
            <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { googleSignInStart, emailSignInStart })(SignIn)
