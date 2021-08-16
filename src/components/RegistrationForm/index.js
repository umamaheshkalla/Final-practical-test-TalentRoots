import {Component} from 'react'

import Cookies from 'js-cookie'

import {HiDesktopComputer} from 'react-icons/hi'

import './index.css'

class RegistrationForm extends Component {
  state = {
    companyName: '',
    companyEmail: '',
    password: '',
    repeatPassword: '',
    nameError: false,
    mailError: false,
    passwordError: false,
    repeatPasswordError: false,
  }

  onChangeCompanyName = event => {
    this.setState({companyName: event.target.value})
  }

  onChangeCompanyEmail = event => {
    this.setState({companyEmail: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeRepeatPassword = event => {
    this.setState({repeatPassword: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {companyName, companyEmail, password, repeatPassword} = this.state
    if (companyName.length < 4) {
      this.setState({nameError: true})
    } else {
      this.setState({nameError: false})
    }
    if (companyEmail.length < 7) {
      this.setState({mailError: true})
    } else {
      this.setState({mailError: false})
    }
    if (password.length < 6) {
      this.setState({passwordError: true})
    } else {
      this.setState({passwordError: false})
    }
    if (password !== repeatPassword) {
      this.setState({repeatPasswordError: true})
    } else {
      this.setState({repeatPasswordError: false})
    }
    if (
      companyName.length >= 4 &&
      companyEmail.length >= 8 &&
      password.length >= 6 &&
      repeatPassword === password
    ) {
      const companyMail = `${companyEmail}`
      const userPassword = `${password}`
      Cookies.set(`${companyEmail}`, companyMail, {expires: 30})
      Cookies.set(`${companyEmail}Password`, userPassword, {expires: 30})
      const {history} = this.props
      history.replace('/login')
    }
  }

  render() {
    const {
      companyName,
      companyEmail,
      password,
      repeatPassword,
      nameError,
      mailError,
      passwordError,
      repeatPasswordError,
    } = this.state
    return (
      <div className="registration-page">
        <div>
          <HiDesktopComputer className="project-logo" />
        </div>
        <div className="registration-card">
          <h1 className="project-heading">
            <span className="span-letter">P</span>ROJECT
          </h1>
          <p className="sign-up-now">Sign Up Now</p>
          <form className="form-container" onSubmit={this.submitForm}>
            <label className="label-element" htmlFor="companyName">
              Company Name <span className="span-label">*</span>
            </label>
            <input
              className="input-element"
              type="text"
              id="companyName"
              value={companyName}
              onChange={this.onChangeCompanyName}
            />
            {nameError && (
              <li className="error-msg">
                *Name length should be more than 4 characters
              </li>
            )}
            <label className="label-element" htmlFor="companyEmail">
              Company Email<span className="span-label">*</span>
            </label>
            <input
              className="input-element"
              type="text"
              id="companyEmail"
              value={companyEmail}
              onChange={this.onChangeCompanyEmail}
            />
            {mailError && <li className="error-msg">*Email Incorrect</li>}
            <label className="label-element" htmlFor="password">
              Password<span className="span-label">*</span>
            </label>
            <input
              className="input-element"
              type="password"
              id="password"
              value={password}
              onChange={this.onChangePassword}
            />
            {passwordError && (
              <li className="error-msg">
                *Length should be more than 6 characters
              </li>
            )}
            <label className="label-element" htmlFor="repeatPassword">
              Repeat Password<span className="span-label">*</span>
            </label>
            <input
              className="input-element"
              type="password"
              id="repeatPassword"
              value={repeatPassword}
              onChange={this.onChangeRepeatPassword}
            />
            {repeatPasswordError && (
              <li className="error-msg">
                *Password should be same as mentioned above
              </li>
            )}
            <button className="sign-up-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
