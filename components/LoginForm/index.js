// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onResponseOk = () => {
    const {history} = this.props
    history.replace('/')
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const updatedResponse = {
      errorMessage: data.error_msg,
      statusCode: data.status_code,
    }
    console.log(updatedResponse)
    if (response.ok === true) {
      this.onResponseOk()
      this.setState({errorMessage: ''})
    } else {
      this.setState({errorMessage: `*${updatedResponse.errorMessage}`})
    }
  }

  render() {
    const {username, password, errorMessage} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-img-desktop"
        />
        <form className="login-form" onSubmit={this.onLogin}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-form-img"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-img"
          />
          <div className="input-element">
            <label htmlFor="name" className="label-style">
              USERNAME
            </label>
            <input
              type="text"
              id="name"
              placeholder="Username"
              className="input-field"
              value={username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="input-element">
            <label htmlFor="pwd" className="label-style">
              PASSWORD
            </label>
            <input
              type="password"
              id="pwd"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <p className="err-msg">{errorMessage}</p>
        </form>
      </div>
    )
  }
}
export default LoginForm
