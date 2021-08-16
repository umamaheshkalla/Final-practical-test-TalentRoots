import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

class AddPolicy extends Component {
  state = {
    policyName: '',
    leaveDays: '',
    description: '',
    submitResponse: false,
    isCreatedNewPolicy: true,
    isPolicyNameError: false,
    isLeaveDaysError: false,
  }

  onClickNewPolicy = () => {
    this.setState({
      policyName: '',
      leaveDays: '',
      description: '',
    })
  }

  onChangePolicyName = event => {
    this.setState({policyName: event.target.value})
  }

  onChangeLeaveDays = event => {
    this.setState({leaveDays: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
  }

  onClickSubmit = () => {
    const {policyName, leaveDays, isCreatedNewPolicy} = this.state
    if (policyName === '') {
      this.setState({isPolicyNameError: true})
    } else {
      this.setState({isPolicyNameError: false})
    }
    if (leaveDays === 0) {
      this.setState({isLeaveDaysError: true})
    } else {
      this.setState({isLeaveDaysError: false})
    }
    if (leaveDays === '') {
      this.setState({isLeaveDaysError: true})
    } else {
      this.setState({isLeaveDaysError: false})
    }

    if (policyName !== '' && leaveDays !== '' && leaveDays !== 0) {
      this.setState({submitResponse: true})
      Cookies.set('policyName', policyName, {expires: 10})
      Cookies.set('leaveDays', leaveDays, {expires: 10})
      Cookies.set('isCreated', isCreatedNewPolicy, {expires: 10})
    }
  }

  onClickClose = () => {
    const {history} = this.props
    history.replace('/overview')
  }

  render() {
    const {
      policyName,
      leaveDays,
      description,
      isPolicyNameError,
      isLeaveDaysError,
      submitResponse,
    } = this.state
    return (
      <div>
        <nav className="add-policy-nav">
          <p className="nav-heading">Add Leave Policy</p>
        </nav>
        <div className="add-policy-form">
          <label htmlFor="policyName">Policy Name</label>
          <input
            onChange={this.onChangePolicyName}
            value={policyName}
            type="text"
            className="policy-input"
            placeholder="Name of Policy"
            id="policyName"
          />
          {isPolicyNameError && (
            <li className="error-msg">*Name should not be Empty</li>
          )}
          <label htmlFor="leaveDays">Leave Days</label>
          <input
            onChange={this.onChangeLeaveDays}
            value={leaveDays}
            type="text"
            className="policy-input"
            placeholder="Number of Days"
            id="leaveDays"
          />
          {isLeaveDaysError && (
            <li className="error-msg">*Leave Days Should not be Empty or 0</li>
          )}
          <label htmlFor="description">Description</label>
          <input
            onChange={this.onChangeDescription}
            value={description}
            type="text"
            className="policy-input-description"
            id="description"
            placeholder="Enter Leave Description"
          />
          <button
            onClick={this.onClickNewPolicy}
            className="add-new-policy-button"
            type="button"
          >
            + Add New Policy
          </button>
        </div>
        <hr />
        {submitResponse && (
          <p className="new-policy-text">New Policy Added SuccessFully!!</p>
        )}
        <nav className="nav-bottom-section">
          <button
            onClick={this.onClickSubmit}
            className="submit-policy-button"
            type="button"
          >
            Submit
          </button>
          <button
            onClick={this.onClickClose}
            className="close-button"
            type="button"
          >
            Close
          </button>
        </nav>
      </div>
    )
  }
}

export default AddPolicy
