import React from 'react';
import { Link } from 'react-router-dom';
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
    // this.checkPasswordLength = this.checkPasswordLength.bind(this);
    // this.passwordClass = this.passwordClass.bind(this);
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
    this.props.signup(this.state);
  }

  // checkPasswordLength(e) {
  //   const val = e.currentTarget.value;
  //   if (val.length < 6) {
  //     debugger
  //   }
  // }

  // passwordClass(e) {
  //   debugger
  //   return 'password-error';
  // }


  render() {
    const logo = <FontAwesomeIcon icon={faFeatherAlt} />;
    return (
      <div className='signup'>
        <div className='signup-left'>
          <h2>Blackbird {logo}</h2>
          <br/>
          <h3>Make Your Money Move</h3>
          <h4>Blackbird lets you invest in companies you love, commission-free.</h4>
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              value={this.state.email}
              placeholder='Email'
              onChange={this.handleChange('email')}
            />
            <br/>
            <div className='name-inputs'>
              <input 
                type="text" 
                value={this.state.first_name} 
                placeholder='First name'
                onChange={this.handleChange('first_name')}
                className='input-fname'
              />
              <input 
                type="text" 
                value={this.state.last_name} 
                placeholder='Last name'
                onChange={this.handleChange('last_name')}
                className='input-lname'
              />
            </div>
            <br/>
            <input
              type="text"
              value={this.state.username}
              placeholder='Username'
              onChange={this.handleChange('username')}
            />
            <br/>
            <input
              // className={this.passwordClass()}
              type="password"
              value={this.state.password}
              placeholder='Password (min. 6 characters)'
              onChange={this.handleChange('password')}
              // onBlur={this.checkPasswordLength}
            />
            <br/>
            <div className='signup-submit-div'>
              <button className='signup-submit'>Continue</button>
              <div>
                <p>Already signed up?</p>
                <Link to='/login'>Log in to your account</Link>
              </div>
            </div>
          </form>
          <div className='signup-errors'>
            { this.props.errors ? (
              this.props.errors.map((error, i) => {
                return <li key={i}>{error}</li>;
              })
              ) : (
                null
              )
            }
          </div>
          <p>
            {/* All investments involve risk and the past performance of a security, 
            or financial product does not guarantee future results or returns. 
            Keep in mind that while diversification may help spread risk it does 
            not assure a profit, or protect against loss, in a down market. 
            There is always the potential of losing money when you invest in 
            securities, or other financial products. Investors should consider 
            their investment objectives and risks carefully before investing. */}
            All investments involve risk and the past performance of a security, 
            or financial product does not guarantee future results or returns.
            Luckily, this site does not involve trading with any monetary assets,
            so feel free jump in and to take those risks. There is no potential of 
            losing money here, but sadly there is no potential of making money either.
          </p>
        </div>
        <aside className='signup-right'>
          <div>
            <h4>Commission-free stock trading</h4>
            <p>
              {/* We’ve cut the fat that makes other brokerages costly, 
              like manual account management and hundreds of storefront 
              locations, so we can offer zero commission trading. */}
              We've cut the fat that makes other brokerages costly,
              such as trading real money on the stock market. We are therefore
              proudly able to offer commission-free trades.
            </p>
            <h4>Keep tabs on your money</h4>
            <p>
              Set up customized news and watchlists to stay on top of 
              your assets as casually or as relentlessly as you like. 
              Controlling the flow of info is up to you.
            </p>
          </div>
        </aside>
      </div>
    );
  }

}