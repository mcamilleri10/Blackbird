import React from 'react';

export default class OwnedAssetInfo extends React.Component {

  constructor(props) {
    super(props);
    this.calculateTodaysReturn = this.calculateTodaysReturn.bind(this);
    this.calculateTotalReturn = this.calculateTotalReturn.bind(this);
  }

  // componentDidMount() {
  //   this.calculateTodaysReturn();
  //   this.calculateTotalReturn();
  // }

  calculateTodaysReturn() {
    const { user, company } = this.props;
    const numSharesOwned = user.shares[company.symbol].numSharesOwned;
    const priceChange = (numSharesOwned * company.change);
    const percentChange = (company.changePercent * 100);
    if (priceChange > 0) {
      return `+$${priceChange.toFixed(2)} (+${(percentChange.toFixed(2))}%)`;
    } else {
      return `-$${-(priceChange.toFixed(2))} (-${-(percentChange.toFixed(2))}%)`;
    }
  }

  calculateTotalReturn() {
    const { user, company } = this.props;
    const numSharesOwned = user.shares[company.symbol].numSharesOwned;
    const totalCost = user.shares[company.symbol].totalCost;
    const sharePrice = company.latestPrice;
    const totalReturn = ((numSharesOwned * sharePrice) - totalCost);
    const difference = (numSharesOwned * sharePrice) - totalCost;
    const percentChange = (difference / totalCost * 100);
    if (totalReturn > 0) {
      return `+$${totalReturn.toFixed(2)} (+${percentChange.toFixed(2)}%)`;
    } else {
      return `-$${-(totalReturn.toFixed(2))} (-${-(percentChange.toFixed(2))}%)`;
    }
  }

  render() {
    const { user, company } = this.props;
    const totalCost = user.shares[company.symbol].totalCost;
    const numSharesOwned = user.shares[company.symbol].numSharesOwned;
    const sharePrice = company.latestPrice;
    return (
      <div className='owned-asset-container'>
        <div className='your-market-value'>
          <h5>Your Market Value</h5>
          <span className='owned-asset-cost'>
            {`$${(sharePrice * numSharesOwned).toFixed(2)}`}
          </span>
          <div>
            <span>Cost</span>
            <span>{`$${totalCost.toFixed(2)}`}</span>
          </div>
          <div>
            <span>Today's Return</span>
            <span>{this.calculateTodaysReturn()}</span>
          </div>
          <div>
            <span>Total Return</span>
            <span>{this.calculateTotalReturn()}</span>
          </div>
        </div>
        <div className='your-average-cost'>
          <h5>Your Average Cost</h5>
          <span className='owned-asset-cost'>
            {`$${(totalCost / numSharesOwned).toFixed(2)}`}
          </span>
          <div>
            <span>Shares</span>
            <span>{`${numSharesOwned}`}</span>
          </div>
        </div>
      </div>
    );
  }
}