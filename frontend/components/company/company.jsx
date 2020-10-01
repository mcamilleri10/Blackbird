import React from 'react';
import { requestQuote } from '../../actions/companies/company_actions';
import { requestCompanyInfo } from '../../util/companies/companies_api_util';
import DashboardChart from '../dashboard/dashboard_chart';

export default class Company extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chartValue: 0,
      dayPriceChange: 0,
      dayPercentChange: 0,
      data: null,
      buyingPowerFormActive: false,
      active1dBtn: true,
      active5dmBtn: false,
      active1mmBtn: false,
      active3mBtn: false,
      active1yBtn: false,
      active5yBtn: false,
      showMoreActive: false,
      showMoreText: 'Show More',
      readMoreActive: false,
      readMoreText: 'Read More',
      description: ''
    };
    this.formatChartValue = this.formatChartValue.bind(this);
    this.formatIntraData = this.formatIntraData.bind(this);
    this.handleRangeClick = this.handleRangeClick.bind(this);
    this.formatHistData = this.formatHistData.bind(this);
    this.showMore = this.showMore.bind(this);
    this.readMore = this.readMore.bind(this);
  }

  componentDidMount() {
    const { requestQuote, requestCompanyInfo } = this.props;
    const companyId = this.props.match.params.companyId;
    requestQuote(companyId).then(() => requestCompanyInfo(companyId)
      .then(() => this.formatChartValue())
      .then(() => this.formatIntraData())
      .then(() => this.formatDescription()));
  }

  componentDidUpdate(prevProps) {
    // debugger
    const { requestQuote, requestCompanyInfo } = this.props;
    const companyId = this.props.match.params.companyId;
    if (prevProps.match.params.companyId !== companyId) {
      requestQuote(companyId).then(() => requestCompanyInfo(companyId)
        .then(() => this.formatChartValue())
        .then(() => this.formatIntraData())
        .then(() => this.formatDescription()));
    }
  }

  handleRangeClick(range, e) {
    e.preventDefault();
    const companyId = this.props.match.params.companyId; 
    if (range === '1d') {
      this.formatIntraData();
    } else {
      this.props.requestHistoricalPrices(companyId, range)
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

  formatChartValue() {
    const { company, receiveColor } = this.props;
    // debugger
    const { iexRealtimePrice, change, changePercent } = company;
    this.setState({
      chartValue: iexRealtimePrice.toFixed(2),
      dayPriceChange: change,
      dayPercentChange: changePercent
    });
    if (change >= 0) {
      receiveColor('limegreen');
    } else {
      receiveColor('red');
    }
  }

  formatIntraData() {
    const { company } = this.props;
    const data = [];
    let nullPrice;
    company.intradayPrices.forEach(price => {
      if (price.average === null) {
        price.average = nullPrice;
      }
      nullPrice = price.average;
      data.push({'date/time': price.label, 'price': price.average});
    });
    // debugger
    this.setState({ data: data });
  }

  formatHistData() {
    const { company, formatDateStr } = this.props;
    const data = [];
    let dateStr;
    company.chart.forEach(price => {
      if (price.average) {
        dateStr = formatDateStr(price.date + ', ' + price.label);
      } else {
        dateStr = formatDateStr(price.date);
      }
      data.push({'date/time': dateStr, 'price': price.high});
    });
    this.setState({ data: data });
  }

  showMore() {
    if (this.state.showMoreText === 'Show More') {
      this.setState({ showMoreActive: true, showMoreText: 'Show Less' });
    } else {
      this.setState({ showMoreActive: false, showMoreText: 'Show More' });
    }
  }

  readMore(e) {
    if (this.state.readMoreText === 'Read More') {
      this.setState({ readMoreText: 'Read Less'});
    } else {
      this.setState({ readMoreText: 'Read More'});      
    }
    // debugger
    this.formatDescription(e.currentTarget.innerHTML);
  }

  formatDescription(readText) {
    const { company } = this.props;
    if (readText === 'Read More') {
      // debugger
      this.setState({ description: company.description + ' '});
    } else {
      // debugger
      const shortened = company.description.split('.').slice(0, 3).join('.') + '. ';
      this.setState({ description: shortened });
    }
  }


  render() {
    const { company, color } = this.props;
    const { chartValue, dayPriceChange, dayPercentChange, data, active1dBtn,
      active5dmBtn, active1mmBtn, active3mBtn, active1yBtn, active5yBtn,
      showMoreActive, showMoreText, readMoreText, description } = this.state;
    if (!company) return null;
    // debugger
    return (
      <div className='company-left'>
        <div className='company-content'>
          <div className='company-main'>
            <div className='chart-value'>
              <h1>{company.companyName}</h1>
              <h1>${chartValue}</h1>
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
            <div className='company-graph'>
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
              <button
                className={active5yBtn ? (`range-btn ${color}-h` + ` ${color}` + '-bb') : (`range-btn ${color}-h`)}
                onClick={e => this.handleRangeClick('5y', e)}
              > 5Y
              </button>
            </div>
            <div className='company-about'>
              <div className='company-about-title'>
                <h2>About</h2>
                <button onClick={this.showMore} className={`${color} ${color}-hlite2`} >
                  {showMoreText}
                </button>
              </div>
              <div className='company-description'>
                <p>
                  {description}
                  <button onClick={this.readMore} className='read-more'>
                    {readMoreText}
                  </button>
                </p>
              </div>
              <div className='company-stats'>
                  <div>
                    <p>CEO</p>
                    <p>{company.CEO}</p>
                  </div>
                  <div>
                    <p>Employees</p>
                    <p>{company.employees}</p>
                  </div>
                  <div>
                    <p>Headquarters</p>
                    <p>{`${company.city}, ${company.state}`}</p>
                  </div>
                  <div>
                    <p>Country</p>
                    <p>{company.country}</p>
                  </div>
                  <div>
                    <p>Market Cap</p>
                    <p>{company.marketCap}</p>
                  </div>
                  <div>
                    <p>Price-Earnings Ratio</p>
                    <p>{company.peRatio}</p>
                  </div>
                  <div>
                    <p>Exchange</p>
                    <p>{company.exchange}</p>
                  </div>
                  <div>
                    <p>Average Volume</p>
                    <p>{company.avgTotalVolume}</p>
                  </div>
                </div>
                {showMoreActive ? (
                  <div className='company-stats'>
                    <div>
                      <p>High Today</p>
                      <p>{company.high}</p>
                    </div>
                    <div>
                      <p>Low Today</p>
                      <p>{company.low}</p>
                    </div>
                    <div>
                      <p>Open Price</p>
                      <p>{company.open}</p>
                    </div>
                    <div>
                      <p>Volume</p>
                      <p>{company.volume}</p>
                    </div>
                    <div>
                      <p>52 Week High</p>
                      <p>{company.week52High}</p>
                    </div>
                    <div>
                      <p>52 Week Low</p>
                      <p>{company.week52Low}</p>
                    </div>
                  </div>
                ) : (
                  null
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}