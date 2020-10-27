import React from 'react';
import { Link } from 'react-router-dom';
import { formatStat } from '../../util/companies/companies_util';

export default class WatchlistItem extends React.Component {

  render() {
    const { quote } = this.props;
    return (
      <Link to={`/auth/companies/${quote.symbol}`}>
        <li className='watchlist-index-item'>
          <span className='quote-name'>{quote.companyName}</span>
          <span className='quote-symbol'>{quote.symbol}</span>
          <span className='quote-price'>${quote.iexRealtimePrice || quote.delayedPrice || quote.latestPrice}</span>
          <span className='quote-today'>{`${(quote.changePercent * 100).toFixed(2)}%`}</span>
          <span className='quote-mktcap'>{formatStat(quote.marketCap)}</span>
          <span>x</span>
        </li>
      </Link>
    );
  }
}