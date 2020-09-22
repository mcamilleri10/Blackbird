import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

export default class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      first_name: '',
      last_name: '',
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
    this.props.signup(this.state);
  }

  render() {
    const logo = <FontAwesomeIcon icon={faFeatherAlt} />;
    return (
      <div>
        <h2>Blackbird {logo}</h2>
        <br/>
        <h2>Make Your Money Move</h2>
        <h3>Blackbird lets you invest in companies you love, commission-free.</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.email}
            placeholder='Email'
            onChange={this.handleChange('email')}
          />
          <br/>
          <input 
            type="text" 
            value={this.state.first_name} 
            placeholder='First name'
            onChange={this.handleChange('first_name')}
          />
          <input 
            type="text" 
            value={this.state.last_name} 
            placeholder='Last name'
            onChange={this.handleChange('last_name')}
          />
          <br/>
          <input
            type="text"
            value={this.state.username}
            placeholder='Username'
            onChange={this.handleChange('username')}
          />
          <br/>
          <input
            type="password"
            value={this.state.password}
            placeholder='Password (min. 6 characters)'
            onChange={this.handleChange('password')}
          />
          <br/>
          <button>Continue</button>
        </form>
        <aside>
          <h4>Commission-free stock trading</h4>
          <p>We’ve cut the fat that makes other brokerages costly, 
            like manual account management and hundreds of storefront 
            locations, so we can offer zero commission trading.
          </p>
          <h4>Keep tabs on your money</h4>
          <p>
            Set up customized news and notifications to stay on top of 
            your assets as casually or as relentlessly as you like. 
            Controlling the flow of info is up to you.
          </p>
        </aside>
      </div>
    );
  }

}