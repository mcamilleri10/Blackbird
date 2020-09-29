import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import Search from './search/search';


export default class Navbar extends React.Component {

 
  render() {
    const logo = <FontAwesomeIcon icon={faFeatherAlt}/>;
    // const search = <FontAwesomeIcon icon={faSearch}/>;
    const { searchResults, symbolSearch } = this.props;
    return (
      <div className='navbar'>
        <div className='navbar-left'>
          <div><Link to={`/`}>{logo}</Link></div>
        </div>
        <div className='navbar-center'>
          <Search searchResults={searchResults} symbolSearch={symbolSearch}/>
        </div>
        <div className='navbar-right'>
          <button onClick={() => this.props.logout()}>Logout</button>
        </div>
      </div>
    );
  }
}