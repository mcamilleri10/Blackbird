import React from 'react';

export default class WatchlistItem extends React.Component {

  render() {
    const { quote } = this.props;
    return (
      <li>
        {quote.symbol}
      </li>
    );
  }
}