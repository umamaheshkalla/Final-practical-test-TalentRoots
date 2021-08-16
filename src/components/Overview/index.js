import {Component} from 'react'

import Cookies from 'js-cookie'

import {GoThreeBars} from 'react-icons/go'

import {AiOutlineSearch, AiOutlineBell} from 'react-icons/ai'

import {HiOutlineChat} from 'react-icons/hi'

import {BsThreeDotsVertical} from 'react-icons/bs'

import './index.css'

class Overview extends Component {
  state = {showActions: false}

  onClickActions = () => {
    this.setState({showActions: true})
  }

  onClickAddPolicy = () => {
    const {history} = this.props
    history.replace('/addPolicy')
  }

  render() {
    const {showActions} = this.state
    const policyName = Cookies.get('policyName')
    const leaveDays = Cookies.get('leaveDays')
    const isCreatedNewPolicy = Cookies.get('isCreated')
    const remainingLeaves = leaveDays - 18

    return (
      <div className="overview-container">
        <nav className="nav-container">
          <div className="nav-bar">
            <div className="first-block">
              <h1>PROJECT</h1>
              <GoThreeBars className="icons" />
            </div>
            <div>
              <AiOutlineSearch className="icons" />
              <HiOutlineChat className="icons" />
              <AiOutlineBell className="icons" />
            </div>
          </div>
          <h1>Overview</h1>
        </nav>
        <div className="policy-info-block">
          <div className="main-heading">
            <p>Time Off</p>
            <button
              type="button"
              className="new-policy"
              onClick={this.onClickAddPolicy}
            >
              + Add Leave Policy
            </button>
          </div>
          <div className="sub-heading">
            <p className="heading">Name</p>
            <p className="heading">Day</p>
            <p className="heading">Create On</p>
            <p className="heading">Action</p>
          </div>
          <div className="policy-details">
            <p className="policy-type">Sick Leave</p>
            <p className="leaves">
              8<span className="remaining-leaves">(Remaining Leaves- 10)</span>
            </p>
            <p className="date">10 June 2020</p>

            {showActions ? (
              <select className="select-block">
                <option>Edit</option>
                <option>Delete</option>
              </select>
            ) : (
              <BsThreeDotsVertical onClick={this.onClickActions} />
            )}
          </div>
          <div className="policy-details">
            <p className="policy-type">Plan Leave</p>
            <p className="leaves">
              12<span className="remaining-leaves">(Remaining Leaves - 6)</span>
            </p>
            <p>09 Jul 2020</p>
            {showActions ? (
              <select className="select-block">
                <option>Edit</option>
                <option>Delete</option>
              </select>
            ) : (
              <BsThreeDotsVertical onClick={this.onClickActions} />
            )}
          </div>
          <div className="policy-details">
            <p className="policy-type">Casual Leave</p>
            <p className="leaves">
              4<span className="remaining-leaves">(Remaining Leaves - 14)</span>
            </p>
            <p>12 Aug 2020</p>
            {showActions ? (
              <select className="select-block">
                <option>Edit</option>
                <option>Delete</option>
              </select>
            ) : (
              <BsThreeDotsVertical onClick={this.onClickActions} />
            )}
          </div>
          <div className="policy-details">
            <p className="policy-type">Casual Leave</p>
            <p className="leaves">
              2<span className="remaining-leaves">(Remaining Leaves - 0)</span>
            </p>
            <p>09 Nov 2020</p>
            {showActions ? (
              <select className="select-block">
                <option>Edit</option>
                <option>Delete</option>
              </select>
            ) : (
              <BsThreeDotsVertical onClick={this.onClickActions} />
            )}
          </div>
          <div className="policy-details">
            <p className="policy-type">Sick Leave</p>
            <p className="leaves">
              1<span className="remaining-leaves">(Remaining leaves - 0)</span>
            </p>
            <p>09 Nov 2020</p>
            {showActions ? (
              <select className="select-block">
                <option>Edit</option>
                <option>Delete</option>
              </select>
            ) : (
              <BsThreeDotsVertical onClick={this.onClickActions} />
            )}
          </div>
          {isCreatedNewPolicy && (
            <div className="policy-details">
              <p className="policy-type">{policyName}</p>
              {leaveDays > 18 ? (
                <p className="leaves">
                  N/A
                  <span className="remaining-leaves">
                    (*LeaveDays must be >= 18 )
                  </span>
                </p>
              ) : (
                <p className="leaves">
                  {leaveDays}
                  <span className="remaining-leaves">
                    (Remaining Leaves {remainingLeaves})
                  </span>
                </p>
              )}
              <p>16 Sep 2021</p>
              {showActions ? (
                <select className="select-block">
                  <option>Edit</option>
                  <option>Delete</option>
                </select>
              ) : (
                <BsThreeDotsVertical onClick={this.onClickActions} />
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Overview
