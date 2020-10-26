import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngellist } from '@fortawesome/free-brands-svg-icons';
import Search from './search/search';


export default class Navbar extends React.Component {

 
  render() {
    const logo = <FontAwesomeIcon icon={faFeatherAlt}/>;
    const { searchResults, symbolSearch, color } = this.props;
    const github = <FontAwesomeIcon icon={faGithub} />;
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
    const angel = <FontAwesomeIcon icon={faAngellist} />;
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
          <a href="https://angel.co/u/mark-camilleri-1" className={`${color}-h`}>
            {angel}<span>AngelList</span>
          </a>
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