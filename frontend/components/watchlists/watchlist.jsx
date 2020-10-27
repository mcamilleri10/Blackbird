import React from 'react';

export default class Watchlist extends React.Component {

  componentDidMount() {
    const { fetchWatchlist, requestQuotes } = this.props;
    fetchWatchlist(this.props.match.params.watchlistId)
      .then(res => requestQuotes(res.watchlist.companyIds.toString()));
  }

  render() {
    const { watchlist, quotes } = this.props;
    if (!quotes || !watchlist) return null;
    return (
      <div>
        <span>{watchlist.name}</span>
        <ul>
          {Object.values(quotes).map(quote => {
            return <li>{quote.symbol}</li>;
          })}
        </ul>
      </div>
    );
  }
}