import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

export default class Splash extends React.Component {
  render() {
    const logo = <FontAwesomeIcon icon={faFeatherAlt} />;
    return(
      <div>
        <header className='splash-nav-bar'>
          <div className='splash-nav-left'>
            <h1 className='main-logo'>Blackbird {logo}</h1>
            <h3>Products</h3>
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

          </section>
        </section>
      </div>
    );
  }
}