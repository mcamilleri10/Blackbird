import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import FractionalModal from './fractional_modal';
import CommissionsModal from './commissions_modal';

export default class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showProductsDropdown: false,
      showProductsDownArrow: true,
      showLearnDropdown: false,
      showLearnDownArrow: true,
      showFractionalModal: false,
      showCommissionsModal: false
    };
    this.toggleProductsClass = this.toggleProductsClass.bind(this);
    this.toggleLearnClass = this.toggleLearnClass.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.toggleFractionalModal = this.toggleFractionalModal.bind(this);
    this.toggleCommissionsModal = this.toggleCommissionsModal.bind(this);
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

  demoLogin() {
    this.props.login({
      email: 'demo@blackbird.com',
      password: 'hunter12' 
    });
  }

  toggleFractionalModal() {
    this.setState({ showFractionalModal: !this.state.showFractionalModal});
  }

  toggleCommissionsModal() {
    this.setState({ showCommissionsModal: !this.state.showCommissionsModal});
  }


  render() {
    const logo = <FontAwesomeIcon icon={faFeatherAlt} />;
    const downArrow = <FontAwesomeIcon icon={faAngleDown} />;
    const upArrow = <FontAwesomeIcon icon={faAngleUp} />;
    const info = <FontAwesomeIcon icon={faInfo} />;
    const github = <FontAwesomeIcon icon={faGithubSquare} />;
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />;

    {/* images courtesy of Robinhood */ }
    // debugger
    return(
      <div className='splash'>
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
              <button onClick={this.demoLogin} className='main-demo-link'>Demo</button>
              
              {/* REMOVE AFTER AUTH REVIEW */}
              <button onClick={this.props.logout}>Click to Logout (Temporary)</button>

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
          <div className='commissions-modal-link'>
            <div className='commissions-info'>{info}</div>
            <button onClick={this.toggleCommissionsModal}>
              Commissions Disclosure
            </button>
          </div>
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
            <div className='fractional-modal-link'>
              <div className='fractional-info'>{info}</div>
              <button onClick={this.toggleFractionalModal}>
                Fractional Shares Disclosure
              </button>
            </div>
          </div>
          <div className='fractional'>
            <img src={window.fractionalURL} />
          </div>
        </section>
        <footer className='splash-footer'>
          <div className='personal-1'>
            <p>Mark Camilleri</p>
            <p>Brooklyn, NY</p>
            <p>markcamilleri10@gmail.com</p>
          </div>
          <div className='personal-2'>
            <a href="https://github.com/troubadour10">
              {github}<span>Github</span> 
            </a>
            <a href="https://www.linkedin.com/in/mark-camilleri-0414b4152/">
              {linkedin}<span>LinkedIn</span> 
            </a>
            <p>Skill Demonstration Only - 2020</p>
          </div>
        </footer>

        {/* modals */}
        <div onClick={this.toggleFractionalModal} className={
          this.state.showFractionalModal ?
            'modal-outer active' :
            'modal-outer'}>
          {this.state.showFractionalModal ? (
            <div className="modal-box"><FractionalModal /></div>
            ) : (
              null
            )
          }
        </div>

        <div onClick={this.toggleCommissionsModal} className={
          this.state.showCommissionsModal ?
            'modal-outer active' :
            'modal-outer'}>
          {this.state.showCommissionsModal ? (
            <div className="modal-box"><CommissionsModal /></div>
            ) : (
              null
            )
          }
        </div>
      </div>
    );
  }
}

// Image credits:
{/* https://pnghut.com/png/8JpjGSzQNJ/cube-three-dimensional-space-geometry-geometric-shape-3d-yellow-transparent-png */}