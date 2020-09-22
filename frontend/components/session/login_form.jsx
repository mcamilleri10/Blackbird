import React from 'react';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <div className='login'>
        <div className='login-left'>
          <img src={window.loginURL}/>
        </div>
        <div className='login-right'>
          <div>
            <h3>Welcome to Blackbird</h3>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="email">Email
                <input 
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                />
              </label>
              <br/>
              <label htmlFor="password">Password
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                />
              </label>
              <button>Sign In</button>
            </form>
          </div>
          <p>Image couresty of Freepik</p>
        </div>
      </div>
    );
  }

}

// Image credits:
{/* <a href="http://www.freepik.com">Designed by Freepik</a> */}