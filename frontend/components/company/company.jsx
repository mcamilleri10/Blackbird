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
      active1yBtn: false
    };

    this.formatChartValue = this.formatChartValue.bind(this);
    this.formatIntraData = this.formatIntraData.bind(this);
    this.handleRangeClick = this.handleRangeClick.bind(this);
    this.formatHistData = this.formatHistData.bind(this);
    // this.fetchRealtimeQuotes = this.fetchRealtimeQuotes.bind(this);
    // this.buyingPowerFormClick = this.buyingPowerFormClick.bind(this);
  }

  componentDidMount() {
    const { requestQuote, requestCompanyInfo } = this.props;
    const companyId = this.props.match.params.companyId;
    requestQuote(companyId).then(() => requestCompanyInfo(companyId)
      .then(() => this.formatChartValue())
      .then(() => this.formatIntraData()));
  }

  componentDidUpdate(prevProps) {
    // debugger
    const { requestQuote, requestCompanyInfo } = this.props;
    const companyId = this.props.match.params.companyId;
    if (prevProps.match.params.companyId !== companyId) {
      requestQuote(companyId).then(() => requestCompanyInfo(companyId)
        .then(() => this.formatChartValue())
        .then(() => this.formatIntraData()));
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
    const { company } = this.props;
    const data = [];
    let timeStr;
    company.chart.forEach(price => {
      if (price.average) {
        timeStr = price.date + ', ' + price.label;
      } else {
        timeStr = price.date;
      }
      data.push({'date/time': timeStr, 'price': price.high});
    });
    this.setState({ data: data });
  }


  render() {
    const { company, color } = this.props;
    const { 
      chartValue, 
      dayPriceChange, 
      dayPercentChange, 
      data,
      active1dBtn,
      active5dmBtn,
      active1mmBtn,
      active3mBtn,
      active1yBtn
    } = this.state;
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
              >1M
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
          </div>
        </div>
      </div>
    );
  }
}