import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Search from './search/search';


export default class Navbar extends React.Component {

 
  render() {
    const logo = <FontAwesomeIcon icon={faFeatherAlt}/>;
    const { searchResults, symbolSearch, color } = this.props;
    const github = <FontAwesomeIcon icon={faGithubSquare} />;
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
    return (
      <div className='navbar'>
        <div className='navbar-left'>
          <div><Link to={`/`} className={`${color}-h`}>{logo}</Link></div>
        </div>
        <div className='navbar-center'>
          <Search 
            searchResults={searchResults} 
            symbolSearch={symbolSearch}
            color={color}
          />
        </div>
        <div className='navbar-right'>
          <a href="https://github.com/troubadour10" className={`${color}-h`}>
            {github}<span>Github</span>
          </a>
          <a href="https://www.linkedin.com/in/mark-camilleri-0414b4152/" className={`${color}-h`}>
            {linkedin}<span>LinkedIn</span>
          </a>
          <button onClick={() => this.props.logout()} className={`${color}-h`}>Logout</button>
        </div>
      </div>
    );
  }
}