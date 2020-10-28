import React from 'react';
import WatchlistItem from './watchlist_item';

export default class Watchlist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nameAsc: false,
      nameDesc: false,
      symbolAsc: false,
      symbolDesc: false,
      priceAsc: false,
      priceDesc: false,
      todayAsc: false,
      todayDesc: false,
      mktcapAsc: false,
      mktcapDesc: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.quotesToState = this.quotesToState.bind(this);
  }

  componentDidMount() {
    const { fetchWatchlist, requestQuotes } = this.props;
    fetchWatchlist(this.props.match.params.watchlistId)
      .then(res => requestQuotes(res.watchlist.companyIds.toString())
      .then(() => this.quotesToState()));
  }

  quotesToState() {
    this.setState({ quotes: this.props.quotes });
  }

  handleClick(val) {
    return e => {
      this.state.quotes.sort(this.sortList(val));
      this.setState({ state: this.state });
    };
  }

  sortList(key, order = 'asc') {
    // debugger
    return (a, b) => {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      const aVal = a[key];
      const bVal = b[key];
      let comp = 0;
      if (aVal > bVal) {
        comp = 1;
      } else if (aVal < bVal) {
        comp = -1;
      }
      return order === 'asc' ? comp : (comp * -1);
    };
  }


  render() {
    const { watchlist } = this.props;
    const { quotes } = this.state;
    if (!quotes || !watchlist) return null;
    const length = watchlist.companyIds.length;
    debugger
    return (
      <div className='watchlist-left'>
        <div className='watchlist-content'>
          <div className='watchlist-main'>
            <h1>{watchlist.name}</h1>
            <span className='watchlist-length'>{`${length} items`}</span>
            <ul className='watchlist-index'>
              <li className='watchlist-index-header'>
                <button className='header-name' onClick={this.handleClick('companyName')}>
                  Name
                </button>
                <button className='header-symbol' onClick={this.handleClick('symbol')}>
                  Symbol
                </button>
                <button className='header-price' onClick={this.handleClick('iexRealtimePrice')}>
                  Price
                </button>
                <button className='header-today' onClick={this.handleClick('changePercent')}>
                  Today
                </button>
                <button className='header-mktcap' onClick={this.handleClick('marketCap')}>
                  Market Cap
                </button>
              </li>
              {quotes.map(quote => {
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