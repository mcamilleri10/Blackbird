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

  componentDidMount() {
    this.props.clearErrors();
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
          <section>
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
              <div className='login-errors'>
                {this.props.errors ? (
                  this.props.errors.map((error, i) => {
                    return <li key={i}>{error}</li>;
                  })
                  ) : (
                    null
                  )
                }
              </div>
              <button>Sign In</button>
            </form>
          </section>
          <p>Image couresty of Freepik</p>
        </div>
      </div>
    );
  }

}

// Image credits:
{/* <a href="http://www.freepik.com">Designed by Freepik</a> */}