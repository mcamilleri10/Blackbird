import React from 'react';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalValue: 0,
      dayPriceChange: 0,
      dayPercentChange: 0
    };

    this.fetchRealtimeQuotes = this.fetchRealtimeQuotes.bind(this);
    this.calculateTotalValue = this.calculateTotalValue.bind(this);
    // this.fetchBatchIntradayPrices = this.fetchBatchIntradayPrices.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
      .then(() => this.fetchRealtimeQuotes()
        .then(() => this.calculateTotalValue())
      );
  }

  createSymbolStr() {
    const { shares } = this.props;
    const symbolArr = [];
    shares.forEach(share => {
      symbolArr.push(share.companyId);
    });
    return symbolArr.join(',');
  }

  fetchRealtimeQuotes() {
    const { requestQuotes } = this.props;
    const symbols = this.createSymbolStr();
    return requestQuotes(symbols);
  }

  // fetchBatchIntradayPrices() {
  //   const { requestBatchIntradayPrices } = this.props;
  //   const symbols = this.createSymbolStr();
  //   return requestBatchIntradayPrices(symbols);
  // }


  calculateTotalValue() {
    const { quotes, user } = this.props;
    let sum = user.availableFunds;
    let changePrice = 0;
    let changePercent = 0;
    quotes.forEach(quote => {
      const num_owned = user.shares[quote.symbol].numSharesOwned;
      sum += (quote.iexRealtimePrice * num_owned);
      changePrice += (quote.change * num_owned);
      changePercent += (quote.changePercent * num_owned);
    });
    this.setState({ 
      totalValue: sum.toFixed(2),
      dayPriceChange: changePrice.toFixed(2),
      dayPercentChange: changePercent.toFixed(2)
    });
  }




  render() {
    const { user } = this.props;
    return (
      <div className='dashboard'>
        {/* <button onClick={this.fetchBatchIntradayPrices}>intraday prices</button> */}
        <div className='dashboard-content'>

       
        <div className='dashboard-main'>
          <div className='total-account-value'>
            <h1>${this.state.totalValue}</h1>
            {this.state.dayPriceChange >= 0 ? (
              <p>+${this.state.dayPriceChange}</p>
            ) : (
              <p>-${this.state.dayPriceChange}</p>
            )}
            {this.state.dayPercentChange >= 0 ? (
              <p>(+{this.state.dayPercentChange}%)</p>
            ) : (
              <p>(-{this.state.dayPercentChange}%)</p>
            )}
          </div>
          <div className='dashboard-graph'>
            GRAPH PLACEHOLDER
          </div>
          <div className='buying-power-dd'>
            <button>
              <p>Buying Power</p>
              <p>${user.availableFunds.toFixed(2)}</p>
            </button>
          </div>
        </div>
        <br/>
        <div className='dashboard-sidebar'>
          Dashboard Sidebar Placeholder
        </div>

        </div>
      </div>
    );
  }
}