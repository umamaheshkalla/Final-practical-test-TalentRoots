import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {
    loginEmailId: '',
    loginPassword: '',
  }

  onChangeCompanyEmailId = event => {
    this.setState({loginEmailId: event.target.value})
  }

  onChangeLoginPassword = event => {
    this.setState({loginPassword: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {loginEmailId, loginPassword} = this.state
    const registerMailId = Cookies.get(`${loginEmailId}`)
    const mailIdPassword = Cookies.get(`${loginEmailId}Password`)
    if (registerMailId === loginEmailId && mailIdPassword === loginPassword) {
      const {history} = this.props
      history.replace('/overview')
    }
  }

  render() {
    return (
      <div className="login-page">
        <h1 className="project-heading">
          <span className="span-letter">P</span>ROJECT
        </h1>
        <p className="sign-up-now">Sign In</p>
        <form className="login-form" onSubmit={this.submitForm}>
          <label className="label-element" htmlFor="emailId">
            Company Email ID<span className="span-label">*</span>
          </label>
          <input
            onChange={this.onChangeCompanyEmailId}
            className="input-element"
            id="emailId"
          />
          <label className="label-element" htmlFor="password">
            Password<span className="span-label">*</span>
          </label>
          <input
            onChange={this.onChangeLoginPassword}
            className="input-element"
            id="password"
            type="password"
          />
          <button className="login-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
