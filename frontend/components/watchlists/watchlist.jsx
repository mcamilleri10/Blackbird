import React from 'react';
import WatchlistItem from './watchlist_item';

export default class Watchlist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      companyName: false,
      symbol: false,
      latestPrice: false,
      changePercent: false,
      marketCap: false,
      desc: false
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
    const { name, symbol, price, today, mktcap, desc } = this.state;
    return e => {
      if (desc) {
        this.state.quotes.sort(this.sortList(val, 'desc'));
      } else {
        this.state.quotes.sort(this.sortList(val));
      }
      this.setState({ 
        companyName: false,
        symbol: false,
        latestPrice: false,
        changePercent: false,
        marketCap: false,
        desc: !desc
      });
      this.setState({ [val]: true });
    };
  }

  sortList(key, order = 'asc') {
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
    const { 
      quotes, companyName, symbol, latestPrice, changePercent, marketCap 
    } = this.state;
    if (!quotes || !watchlist) return null;
    const length = watchlist.companyIds.length;
    const active = 'limegreen-h limegreen-bb3';
    const inActive = 'limegreen-h';
    return (
      <div className='watchlist-left'>
        <div className='watchlist-content'>
          <div className='watchlist-main'>
            <h1>{watchlist.name}</h1>
            <span className='watchlist-length'>{`${length} items`}</span>
            <ul className='watchlist-index'>
              <li className='watchlist-index-header'>
                <button className={`${companyName ? active : inActive} header-name`} onClick={this.handleClick('companyName')}>
                  Name
                </button>
                <button className={`${symbol ? active : inActive} header-symbol`} onClick={this.handleClick('symbol')}>
                  Symbol
                </button>
                <button className={`${latestPrice ? active : inActive} header-price`} onClick={this.handleClick('latestPrice')}>
                  Price
                </button>
                <button className={`${changePercent ? active : inActive} header-today`} onClick={this.handleClick('changePercent')}>
                  Today
                </button>
                <button className={`${marketCap ? active : inActive} header-mktcap`} onClick={this.handleClick('marketCap')}>
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