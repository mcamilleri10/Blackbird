import React from 'react';
import { Link } from 'react-router-dom';
import SidebarChart from '../sidebar_chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default class ShareIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dayPriceChange: 0,
      dayPercentChange: 0,
      delayedPrice: 0
    };
    this.formatIntraData = this.formatIntraData.bind(this);
  }

  componentDidMount() {
    // debugger
    if (this.props.quote) {
      this.formatIntraData();
    }
  }
  
  formatIntraData() {
    const { quote, share } = this.props;
    this.setState({ 
      dayPriceChange: quote.change,
      dayPercentChange: quote.changePercent,
      delayedPrice: quote.iexRealtimePrice
     });
    const data = [];
    quote.intradayPrices.forEach(time => {
      // debugger
      if (parseInt(time.minute) % 10 === 0) {
        const datum = { 'time': time.minute, 'price': time.average }; 
        // debugger
        data.push(datum);
      }
    });
    this.setState({ data: data });
  }


  render() {
    const { share, quote, loading } = this.props;
    const { data, dayPriceChange, dayPercentChange, delayedPrice } = this.state;
    // debugger
    const spinner = <FontAwesomeIcon icon={faSpinner} className='spinner' spin />;
    // if (loading) {
    //   // debugger
    //   return <div className='spinner'>{spinner}</div>;
    // }
    if (!data || !quote) return null;
    // debugger
    return (
      <Link to={`/auth/companies/${quote.symbol}`} className='share-index-item'>
        <div className='share-btn-left'>
          <h4>{quote.symbol}</h4>
          { share ? (
            share.numSharesOwned > 1 ? (
              <div>{share.numSharesOwned} Shares</div>
              ) : (
                <div>{share.numSharesOwned} Share</div>
            )
          ) : (
            null
          )}

        </div>
        <div className='share-btn-center'>
          <SidebarChart data={data} dayChange={dayPriceChange} loading={loading} className='sb-chart'/>
        </div>
        <div className='share-btn-right'>
          <p>${delayedPrice.toFixed(2)}</p>
          <p className={dayPercentChange >= 0 ? 'green' : 'red'}>
            {dayPercentChange.toFixed(2)}%
            </p>
        </div>
          
        
      </Link>
    );
  }
}