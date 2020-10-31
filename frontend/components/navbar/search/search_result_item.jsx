import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchResultItem extends React.Component {

  render() {
    const { symbol, name, searchValue, color, closeResults } = this.props;
    let symbol1 = '';
    let symbol2 = '';
    let name1 = '';
    let name2 = '';
    
    if (searchValue.toUpperCase() === symbol.slice(0, searchValue.length).toUpperCase()) {
      symbol1 += symbol.slice(0, searchValue.length);
      symbol2 += symbol.slice(searchValue.length);
    } else {
      symbol2 = symbol;
    }
    
    if (searchValue.toUpperCase() === name.slice(0, searchValue.length).toUpperCase()) {
      name1 += name.slice(0, searchValue.length);
      name2 += name.slice(searchValue.length);
    } else {
      name2 = name;
    }

    return (
      <li className='search-result-item' key={symbol}>
        <Link onClick={closeResults} to={`/auth/companies/${symbol}`} className='search-result-link'>
          <div>
            <p className={`search-match ${color}`}>{symbol1}</p>
            <p className='search-leftover'>{symbol2}</p>
          </div>
          <div>
            <p className={`search-match ${color}`}>{name1}</p>
            <p className='search-leftover'>{name2}</p>
          </div>
        </Link>
      </li>
    );
  }
}