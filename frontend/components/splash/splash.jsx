import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


export default class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showProductsDropdown: false,
      showProductsDownArrow: true,
      showLearnDropdown: false,
      showLearnDownArrow: true
    };
    this.toggleProductsClass = this.toggleProductsClass.bind(this);
    this.toggleLearnClass = this.toggleLearnClass.bind(this);
  }

  toggleProductsClass(e) {
    e.preventDefault();
    if (this.state.showLearnDropdown === true) {
      this.setState({
        showLearnDropdown: false,
        showLearnDownArrow: true
      });
    }
    this.setState({ 
      showProductsDropdown: !this.state.showProductsDropdown,
      showProductsDownArrow: !this.state.showProductsDownArrow
    });
  }
  
  toggleLearnClass(e) {
    e.preventDefault();
    if (this.state.showProductsDropdown === true) {
      this.setState({
        showProductsDropdown: false,
        showProductsDownArrow: true
      });
    }
    this.setState({ 
      showLearnDropdown: !this.state.showLearnDropdown,
      showLearnDownArrow: !this.state.showLearnDownArrow
    });
  }

  render() {
    const logo = <FontAwesomeIcon icon={faFeatherAlt} />;
    const downArrow = <FontAwesomeIcon icon={faAngleDown} />;
    const upArrow = <FontAwesomeIcon icon={faAngleUp} />;

    {/* images courtesy of Robinhood */ }

    return(
      <div>
        <header className='splash-nav-bar'>
          <div className='splash-nav-left'>
            <h1 className='main-logo'>Blackbird {logo}</h1>
            <div className='products-dd' onClick={this.toggleProductsClass}>
              <div className='products-arrow'>
                <button><h3>Products</h3></button>
                {
                  this.state.showProductsDownArrow ? (
                    <div className='dd-arrow'>{downArrow}</div>
                    ) : (
                    <div className='dd-arrow'>{upArrow}</div>
                  )
                }         
              </div>
              { 
                this.state.showProductsDropdown ? (
                  <div className='products-menu'>
                    <ul className='products-list'>
                      <li>Stocks and Funds</li>
                      <li>Options</li>
                      <li>Gold</li>
                      <li>Cash Management</li>
                    </ul>
                  </div>
                ) : (
                  null
                ) 
              }
            </div>
            <div className='learn-dd' onClick={this.toggleLearnClass}>
              <div className='learn-arrow'>
                <button><h3>Learn</h3></button>
                {
                  this.state.showLearnDownArrow ? (
                    <div className='dd-arrow'>{downArrow}</div>
                    ) : (
                    <div className='dd-arrow'>{upArrow}</div>
                  )
                }         
              </div>
              { 
                this.state.showLearnDropdown ? (
                  <div className='learn-menu'>
                    <ul className='learn-list'>
                      <li>Learn</li>
                      <li>Snacks</li>
                    </ul>
                  </div>
                ) : (
                  null
                ) 
              }
            </div>
          </div>
          <div className='session-links'>
            <Link to='/login' className='login-link'>Log In</Link>
            <Link to='/signup' className='nav-signup-link'>Sign Up</Link>
          </div>
        </header>

        <section className='splash-main'>
          <section className='splash-main-info col splash-main-info-col-1-2'>
            <div className='splash-main-text'>
              <h1>Investing for Everyone</h1>
              <p>Blackbird, a pioneer of comission-free investing, 
                gives you more way to make your money work harder.
              </p>
              <Link to='/signup' className='main-signup-link'>Sign Up</Link>
            </div>
          </section>
          <section className='splash-main-graphic col splash-main-info-col-2-2'>
            <img src={window.phoneURL} /> 
            <video src={window.phoneAnimationURL} autoPlay loop muted 
              className='animation'> 
            </video>
          </section>
        </section>
        <section className='splash-main-2'>
          <h2>Break Free from Commission Fees</h2>
          <p>
            Make unlimited commission-free trades in stocks, ETFs, and options 
            with Blackbird Financial, as well as buy and sell cryptocurrencies 
            with Blackbird Crypto. See our fee schedule to learn more about cost.
          </p>
        </section>

        <section className='splash-main-3'>
          <div className='main-3-content'>
            <div>
              <h2>Introducing Fractional Shares</h2>
              <h4>Invest in thousands of stocks with as little as $1</h4>
            </div>
            <div className='main-3-blurbs'>
              <div>
                <h3>Invest Any Amount</h3>
                <p>Choose how much you want to invest, and we’ll convert from 
                  dollars to parts of a whole share.
                </p>
              </div>
              <div>
                <h3>Build a Balanced Portfolio</h3>
                <p>Customize your portfolio with pieces of different companies 
                  and funds to help reduce risk.
                </p>
              </div>
              <div>
                <h3>Trade in Real Time</h3>
                <p>Trades placed during market hours are executed at that time, 
                  so you’ll always know the share price.
                </p>
              </div>
            </div>
            <button className='fractional-modal'>
              Fractional Shares Disclosure
            </button>
          </div>
          <div className='fractional'>
            <img src={window.fractionalURL} />
          </div>
        </section>
        <footer className='splash-footer'>

        </footer>
      </div>
    );
  }
}