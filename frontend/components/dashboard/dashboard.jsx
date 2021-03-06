import React from 'react';
import DashboardChart from './dashboard_chart';
import BuyingPowerForm from './buying_power_form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

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



  componentDidMount() {
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
        sum += (quote.latestPrice * num_owned);
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
          // if (i % 5 === 0) {
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
          // } else {
          //   i++;
          //   null;
          // }
        });
      }
    });
    this.setState({ data: Object.values(dataObj) });
  }

  formatHistData() {
    const { quotes, user, formatDateStr } = this.props;
    const dataObj = {};
    quotes.forEach(quote => {
      if (this.isShareOwned(quote)) {
        const num_owned = user.shares[quote.symbol].numSharesOwned;
        let dateStr;
        quote.chart.forEach(price => {
          if (price.average) {
            dateStr = formatDateStr(price.date + ', ' + price.label);
          } else {
            dateStr = formatDateStr(price.date);
          }
          let sum = 0;
          sum += (price.high * num_owned);
          if (dataObj[dateStr]) {
            dataObj[dateStr]['price'] += sum;
          } else {
            dataObj[dateStr] = {
              'date/time': dateStr,
              'price': sum
            };
          }
        });

      }
    });
    this.setState({ data: Object.values(dataObj)});
  }



  render() {
    const { user, quotes, shares, updateUser, color, receiveColor, loading, availableFunds } = this.props;
    const { totalValue, dayPriceChange, dayPercentChange, data, active1dBtn,
      active5dmBtn, active1mmBtn, active3mBtn, active1yBtn, buyingPowerFormActive
    } = this.state;
    const spinner = <FontAwesomeIcon icon={faSpinner} spin />;
    const active = `range-btn ${color}-h` + ` ${color}` + '-bb';
    const inActive = `range-btn ${color}-h`;
    return (
      <div className='dashboard-left'>
        <div className='dashboard-content'>
          <div className='dashboard-main'>
            <div className='total-account-value'>
              <h1>${totalValue}</h1>
              {dayPriceChange >= 0 ? (
                <p>+${dayPriceChange.toFixed(2)}</p>
              ) : (
                <p>-${-(dayPriceChange.toFixed(2))}</p>
              )}
              {dayPercentChange >= 0 ? (
                <p>(+{(dayPercentChange * 100).toFixed(2)}%)</p>
              ) : (
                <p>(-{-(dayPercentChange * 100).toFixed(2)}%)</p>
              )}
            </div>
            <div className='dashboard-graph'>
              <DashboardChart 
                data={data}
                dayChange={dayPriceChange}
                availableFunds={availableFunds}
                asset='false'
              />
            </div>
            <div className='range-btns'>
                <button 
                  className={active1dBtn ? active : inActive} 
                  onClick={e => this.handleRangeClick('1d', e)}
                > 1D
                </button>
                <button 
                  className={active5dmBtn ? active : inActive}
                  onClick={e => this.handleRangeClick('5dm', e)}
                > 1W
                </button>
                <button 
                  className={active1mmBtn ? active : inActive}
                  onClick={e => this.handleRangeClick('1mm', e)}
                > 1M
                </button>
                <button 
                  className={active3mBtn ? active : inActive}
                  onClick={e => this.handleRangeClick('3m', e)}
                > 3M
                </button>
                <button 
                  className={active1yBtn ? active : inActive}
                  onClick={e => this.handleRangeClick('1y', e)}
                > 1Y
                </button>
                {loading ? <div className={`${color}`}>{spinner}</div> : null }
            </div>
            <div className={buyingPowerFormActive ? 'buying-power-dd' : 'buying-power-dd-b'}>
              {buyingPowerFormActive ? (
                <div>
                  <button onClick={this.buyingPowerFormClick} className='buying-power-btn active'>
                    <p>Buying Power</p>
                  </button>
                    <BuyingPowerForm 
                      user={user} 
                      updateUser={updateUser} 
                      color={color}
                      calculateTotalValue={this.calculateTotalValue}
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