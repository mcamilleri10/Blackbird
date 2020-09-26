import React from 'react';
import DashboardChart from './dashboard_chart';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalValue: 0,
      dayPriceChange: 0,
      dayPercentChange: 0,
      data: null
    };

    this.fetchRealtimeQuotes = this.fetchRealtimeQuotes.bind(this);
    this.calculateTotalValue = this.calculateTotalValue.bind(this);
    this.formatData = this.formatData.bind(this);
    // this.fetchBatchIntradayPrices = this.fetchBatchIntradayPrices.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
      .then(() => this.fetchRealtimeQuotes()
        .then(() => this.calculateTotalValue())
        .then(() => this.formatData())
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

  formatData() {
    const { quotes, user } = this.props;
    const dataObj = {};
    quotes.forEach(quote => {
      let i = 0;
      const num_owned = user.shares[quote.symbol].numSharesOwned;
      quote.intradayPrices.forEach(price => {
        if (i % 5 === 0) {
          i++;
          let sum = 0;
          sum += (price.average * num_owned);
          if (dataObj[price.label]) {
            dataObj[price.label]['price'] += sum;
          } else {
            dataObj[price.label] = {
              'time': price.label,
              'price': sum
            };
          }
        } else {
          i++;
          null;
        }
      });
    });
    this.setState({ data: Object.values(dataObj) });
  }



  // formatData() {
  //   const { quotes, user } = this.props;
  //   const dataObj = {};
  //   quotes.forEach(quote => {
  //     const num_owned = user.shares[quote.symbol].numSharesOwned;
  //     quote.intradayPrices.forEach(price => {
  //       let sum = 0;
  //       sum += (price.average * num_owned);
  //       if (dataObj[price.label]) {
  //         dataObj[price.label]['price'] += sum;
  //       } else {
  //         dataObj[price.label] = {
  //           'time': price.label,
  //           'price': sum
  //         };
  //       }
  //     });
  //   });
  //   const data = [];
  //   Object.values(dataObj).forEach((datum, i) => {
  //     if (i % 5 === 0) {
  //       data.push(datum);
  //     }
  //   });
  //   this.setState({ data: data });
  // }




  render() {
    const { user, quotes, shares } = this.props;
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
            <DashboardChart 
              quotes={quotes} 
              user={user} 
              shares={shares} 
              data={this.state.data}
              dayChange={this.state.dayPriceChange}
            />
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