import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchResultItem extends React.Component {

  render() {
    const { symbol, name, searchValue } = this.props;
    let symbol1 = '';
    let symbol2 = '';
    let name1 = '';
    let name2 = '';
    debugger
    for (let i = 0; i < searchValue.length; i++) {
      debugger
      if (searchValue[i].toUpperCase() === symbol[i].toUpperCase()) {
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
    debugger

    return (
      <li className='search-result-item' onClick={e => e.stopPropagation()}>
        <Link to='/' onClick={e => e.stopPropagation()}>
          {/* <p className='search-match'>{symbol1}</p><p>{symbol2}</p> */}
          <div>{symbol}</div>
          <div>{name}</div>
        </Link>
      </li>
    );
  }
}