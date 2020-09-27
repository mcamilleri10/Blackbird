import React from 'react';
import SidebarChart from './sidebar_chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default class ShareIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dayPriceChange: 0
    };
    this.formatIntraData = this.formatIntraData.bind(this);
  }


  
  formatIntraData() {
    const { quote, share } = this.props;
    // debugger
    this.setState({ dayPriceChange: quote.change });
    const data = [];
    quote.intradayPrices.forEach(time => {
      if (parseInt(time.label) % 10 === 0) {
        const datum = { 'time': time.label, 'price': time.average }; 
        data.push(datum);
      }
    });
    // debugger
    this.setState({ data: data });
  }


  render() {
    const { share, quote, loading } = this.props;
    // debugger
    const spinner = <FontAwesomeIcon icon={faSpinner} className='spinner' spin />;
    if (loading) {
      // debugger
      return <div>{spinner}</div>;
    }

    return (
      <button onClick={this.formatIntraData}>
        <div className='share-button-left'>
          <div>{share.companyId}</div>
          {share.numSharesOwned > 1 ? (
            <div>{share.numSharesOwned} Shares</div>
            ) : (
              <div>{share.numSharesOwned} Share</div>
              )}
        </div>
        <div className='share-button-center'>
          <SidebarChart data={this.state.data} dayChange={this.state.dayPriceChange} loading={loading}/>
        </div>
            

        
      </button>
    );
  }
}