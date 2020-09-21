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
          <h1 className='main-logo'>Blackbird {logo}</h1>
          <div className='session-links'>
            <Link to='/login' className='login-link'>Log In</Link>
            <Link to='/signup' className='signup-link'>Sign Up</Link>
          </div>
        </header>
        <section className='splash-main'>

        </section>
      </div>
    );
  }
}