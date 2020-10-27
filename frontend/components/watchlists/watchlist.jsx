import React from 'react';
import WatchlistItem from './watchlist_item';

export default class Watchlist extends React.Component {

  componentDidMount() {
    const { fetchWatchlist, requestQuotes } = this.props;
    fetchWatchlist(this.props.match.params.watchlistId)
      .then(res => requestQuotes(res.watchlist.companyIds.toString()));
  }

  render() {
    const { watchlist, quotes } = this.props;
    if (!quotes || !watchlist) return null;
    const length = watchlist.companyIds.length;
    return (
      <div className='watchlist-left'>
        <div className='watchlist-content'>
          <div className='watchlist-main'>
            <h1>{watchlist.name}</h1>
            <span className='watchlist-length'>{`${length} items`}</span>
            <ul className='watchlist-index'>
              {Object.values(quotes).map(quote => {
                if (watchlist.companyIds.includes(quote.symbol)) {
                  return <WatchlistItem key={quote.symbol} quote={quote}/>;
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}