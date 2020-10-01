import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import Search from './search/search';


export default class Navbar extends React.Component {

 
  render() {
    const logo = <FontAwesomeIcon icon={faFeatherAlt}/>;
    // const search = <FontAwesomeIcon icon={faSearch}/>;
    const { searchResults, symbolSearch, color } = this.props;
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
        <div className={`navbar-right ${color}-h`}>
          <button onClick={() => this.props.logout()}>Logout</button>
        </div>
      </div>
    );
  }
}