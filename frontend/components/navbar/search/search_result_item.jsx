import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchResultItem extends React.Component {

  render() {
    const { symbol, name } = this.props;
    // debugger
    return (
      <li>
      <Link to='/'>
        <div>{symbol}</div>
        <div>{name}</div>
      </Link>

      </li>
    );
  }
}