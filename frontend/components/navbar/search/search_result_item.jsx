import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchResultItem extends React.Component {

  render() {
    const { symbol, name, searchValue, color } = this.props;
    let symbol1 = '';
    let symbol2 = '';
    let name1 = '';
    let name2 = '';
    // debugger
    for (let i = 0; i < searchValue.length; i++) {
      // debugger
      if (
        (symbol.length >= searchValue.length) &&
        (searchValue[i].toUpperCase() === symbol[i].toUpperCase())
      ) {
        symbol1 += symbol[i];
      } else {
        symbol2 += symbol[i];
      }
      if (searchValue[i].toUpperCase() === name[i].toUpperCase()) {
        name1 += name[i];
      } else {
        name2 += name[i];
      }
    }
    symbol2 += symbol.slice(searchValue.length);
    name2 += name.slice(searchValue.length);
    // debugger

    return (
      <li className='search-result-item' key={symbol}>
        <Link to='/' className='search-result-link'>
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