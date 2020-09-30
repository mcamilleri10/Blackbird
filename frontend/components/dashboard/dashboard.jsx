import React from 'react';
import DashboardChart from './dashboard_chart';
import BuyingPowerForm from './buying_power_form';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalValue: 0,
      dayPriceChange: 0,
      dayPercentChange: 0,
      data: null,
      buyingPowerFormActive: false,
      active1dBtn: true,
      active5dmBtn: false,
      active1mmBtn: false,
      active3mBtn: false,
      active1yBtn: false
    };
    this.fetchRealtimeQuotes = this.fetchRealtimeQuotes.bind(this);
    this.calculateTotalValue = this.calculateTotalValue.bind(this);
    this.formatIntraData = this.formatIntraData.bind(this);
    this.handleRangeClick = this.handleRangeClick.bind(this);
    this.formatHistData = this.formatHistData.bind(this);
    this.buyingPowerFormClick = this.buyingPowerFormClick.bind(this);
  }

  // `range-btn ${color}-h`

  componentDidMount() {
    // this.props.startLoading();
    // debugger
    this.props.fetchUser(this.props.match.params.userId)
      .then(() => this.fetchRealtimeQuotes()
        .then(() => this.formatIntraData())
        .then(() => this.calculateTotalValue())
      );
  }
  
  handleRangeClick(range, e) {
    e.preventDefault();
    const symbols = this.createSymbolStr();
    if (range === '1d') {
      this.formatIntraData();
    } else {
      this.props.requestBatchHistoricalPrices(symbols, range)
        .then(() => this.formatHistData());
    }
    // debugger
    this.rangeBtnClass(range);
  }

  rangeBtnClass(range) {
    this.setState({
      active1dBtn: false,
      active5dmBtn: false,
      active1mmBtn: false,
      active3mBtn: false,
      active1yBtn: false
    });
    const activeBtn = `active${range}Btn`;
    this.setState({ [activeBtn]: true });
  }

  buyingPowerFormClick() {
    this.setState({ buyingPowerFormActive: !this.state.buyingPowerFormActive});
  }

  createSymbolStr() {
    const { shares, watchlists } = this.props;
    // debugger
    const symbolArr = [];
    shares.forEach(share => {
      symbolArr.push(share.companyId);
    });
    watchlists.forEach(watchlist => {
      watchlist.companyIds.forEach(symbol => {
        symbolArr.push(symbol);
      });
    });
    const uniqueSymbols = [...new Set(symbolArr)];
    return uniqueSymbols.join(',');
  }

  fetchRealtimeQuotes() {
    const { requestQuotes } = this.props;
    const symbols = this.createSymbolStr();
    return requestQuotes(symbols);
  }

  isShareOwned(quote) {
    return Boolean(this.props.user.shares[quote.symbol]);
  }

  calculateTotalValue() {
    const { quotes, user, receiveColor } = this.props;
    let sum = user.availableFunds;
    let changePrice = 0;
    let changePercent = 0;
    quotes.forEach(quote => {
      if (this.isShareOwned(quote)) {
        const num_owned = user.shares[quote.symbol].numSharesOwned;
        sum += (quote.iexRealtimePrice * num_owned); // delayedPrice or iexRealtimePrice?
        changePrice += (quote.change * num_owned);
        changePercent += (quote.changePercent * num_owned);
      }
    });
    this.setState({ 
      totalValue: sum.toFixed(2),
      dayPriceChange: changePrice,
      dayPercentChange: changePercent
    });
    if (changePrice >= 0) {
      receiveColor('limegreen');
    } else {
      receiveColor('red');
    }
  }

  formatIntraData() {
    const { quotes, user } = this.props;
    const dataObj = {};
    quotes.forEach(quote => {
      if (this.isShareOwned(quote)) {
        let i = 0;
        const num_owned = user.shares[quote.symbol].numSharesOwned;
        let nullPrice;
        quote.intradayPrices.forEach(price => {
          if (i % 5 === 0) {
            i++;
            if (price.average === null) {
              price.average = nullPrice;
            }
            nullPrice = price.average;   
            let sum = 0;
            sum += (price.average * num_owned);
            if (dataObj[price.label]) {
              dataObj[price.label]['price'] += sum;
            } else {
              dataObj[price.label] = {
                'date/time': price.label,
                'price': sum
              };
            }
          } else {
            i++;
            null;
          }
        });
      }
    });
    // debugger
    this.setState({ data: Object.values(dataObj) });
  }

  formatHistData() {
    const { quotes, user } = this.props;
    const dataObj = {};
    quotes.forEach(quote => {
      if (this.isShareOwned(quote)) {
        const num_owned = user.shares[quote.symbol].numSharesOwned;
        let timeStr;
        quote.chart.forEach(price => {
          // debugger
          if (price.average) {
            timeStr = price.date + ', ' + price.label;
          } else {
            timeStr = price.date;
          }
          let sum = 0;
          sum += (price.high * num_owned);
          if (dataObj[timeStr]) {
            dataObj[timeStr]['price'] += sum;
          } else {
            dataObj[timeStr] = {
              'date/time': timeStr,
              'price': sum
            };
          }
        });

      }
    });
    this.setState({ data: Object.values(dataObj)});
    // debugger
  }






  render() {
    const { user, quotes, shares, updateUser, color, receiveColor } = this.props;
    const { totalValue, dayPriceChange, dayPercentChange, data, active1dBtn,
      active5dmBtn, active1mmBtn, active3mBtn, active1yBtn, buyingPowerFormActive
    } = this.state;
    // debugger
    return (
      <div className='dashboard-left'>
        {/* <button onClick={this.fetchBatchIntradayPrices}>intraday prices</button> */}
        <div className='dashboard-content'>
          <div className='dashboard-main'>
            <div className='total-account-value'>
              <h1>${totalValue}</h1>
              {dayPriceChange >= 0 ? (
                <p>+${dayPriceChange.toFixed(2)}</p>
              ) : (
                <p>-${-dayPriceChange.toFixed(2)}</p>
              )}
              {dayPercentChange >= 0 ? (
                <p>(+{dayPercentChange.toFixed(2)}%)</p>
              ) : (
                <p>(-{-dayPercentChange.toFixed(2)}%)</p>
              )}
            </div>
            <div className='dashboard-graph'>
              <DashboardChart 
                data={data}
                dayChange={dayPriceChange}
              />
            </div>
            <div className='range-btns'>
                <button 
                  className={active1dBtn ? (`range-btn ${color}-h` + ` ${color}` + '-bb') : (`range-btn ${color}-h`)} 
                  onClick={e => this.handleRangeClick('1d', e)}
                > 1D
                </button>
                <button 
                  className={active5dmBtn ? (`range-btn ${color}-h` + ` ${color}` + '-bb') : (`range-btn ${color}-h`)}
                  onClick={e => this.handleRangeClick('5dm', e)}
                > 1W
                </button>
                <button 
                  className={active1mmBtn ? (`range-btn ${color}-h` + ` ${color}` + '-bb') : (`range-btn ${color}-h`)}
                  onClick={e => this.handleRangeClick('1mm', e)}
                > 1M
                </button>
                <button 
                  className={active3mBtn ? (`range-btn ${color}-h` + ` ${color}` + '-bb') : (`range-btn ${color}-h`)}
                  onClick={e => this.handleRangeClick('3m', e)}
                > 3M
                </button>
                <button 
                  className={active1yBtn ? (`range-btn ${color}-h` + ` ${color}` + '-bb') : (`range-btn ${color}-h`)}
                  onClick={e => this.handleRangeClick('1y', e)}
                > 1Y
                </button>
            </div>
            <div className='buying-power-dd'>
              {buyingPowerFormActive ? (
                <div>
                  <button onClick={this.buyingPowerFormClick} className='buying-power-btn active'>
                    <p>Buying Power</p>
                  </button>
                    <BuyingPowerForm 
                      user={user} 
                      updateUser={updateUser} 
                      color={color}
                    />
                </div>
              ) : (
                <button onClick={this.buyingPowerFormClick} className='buying-power-btn'>
                  <p>Buying Power</p>
                  <p>${user.availableFunds.toFixed(2)}</p>
                </button>
              )}
            </div>
          </div>
          <br/>
        </div>
      </div>
    );
  }
}