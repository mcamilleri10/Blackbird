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
      <div>
        <aside>
          {/* INSERT IMAGE HERE */}
        </aside>
        <h3>Welcome to Blackbird</h3>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.email}
            onChange={this.handleChange('email')}
          />
          <br/>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
          <button>Sign In</button>
        </form>
      </div>
    );
  }

}