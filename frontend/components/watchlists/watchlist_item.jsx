import React from 'react';
import { Link } from 'react-router-dom';
import { formatStat } from '../../util/companies/companies_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default class WatchlistItem extends React.Component {
  
  handleClick(symbol, e) {
    const watchlist = this.props.watchlist;
    const ids = watchlist.companyIds;
    const i = ids.indexOf(symbol);
    ids.splice(i, 1);
    this.props.removeCompanyFromWatchlist(watchlist);
    e.preventDefault();
  }

  formatChangePercent(changePercent) {
    const upCaret = <FontAwesomeIcon icon={faCaretUp} />;
    const downCaret = <FontAwesomeIcon icon={faCaretDown} />;
    if (changePercent >= 0) {
      return (
        <div>
          <span className='up-caret'>{upCaret}</span>
          <span>{(changePercent * 100).toFixed(2)}%</span>
        </div>
      );
    } else {
      return (
        <div>
          <span className='down-caret'>{downCaret}</span>
          <span>{(-changePercent * 100).toFixed(2)}%</span>
        </div>
      );
    }
  }
  
  render() {
    const { quote } = this.props;
    return (
      <Link to={`/auth/companies/${quote.symbol}`}>
        <li className='watchlist-index-item'>
          <span className='quote-name'>{quote.companyName}</span>
          <span className='quote-symbol'>{quote.symbol}</span>
          <span className='quote-price'>${quote.latestPrice.toFixed(2)}</span>
          <span className='quote-today'>
            {this.formatChangePercent(quote.changePercent)}
          </span>
          <span className='quote-mktcap'>{formatStat(quote.marketCap)}</span>
          <span><button className='remove-from-watchlist' onClick={(e) => this.handleClick(quote.symbol, e)}>X</button></span>
        </li>
      </Link>
    );
  }
}