import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(({ searchValue: e.currentTarget.value }),
      this.initiateSearch);
  }

  initiateSearch() {
    this.props.symbolSearch(this.state.searchValue);
  }

 
  render() {
    const logo = <FontAwesomeIcon icon={faFeatherAlt}/>;
    const search = <FontAwesomeIcon icon={faSearch}/>;

    return (
      <div className='navbar'>
        <div className='navbar-left'>
          <div><Link to={`/`}>{logo}</Link></div>
        </div>
        <div className='navbar-center'>
          <div>{search}</div>
          <form>
            <input 
              type="text"
              placeholder='Search'
              onChange={this.handleChange}
            />
          </form>
        </div>
        <div className='navbar-right'>
          <button onClick={() => this.props.logout()}>Logout</button>
        </div>
      </div>
    );
  }
}