import React from 'react';

export default class OwnedAssetInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    const { user, company } = this.props;
    const totalCost = user.shares[company.symbol].totalCost;
    const numSharesOwned = user.shares[company.symbol].numSharesOwned;
    return (
      <div className='owned-asset-container'>
        <div className='your-market-value'>
          <h5>Your Market Value</h5>
          <span className='owned-asset-cost'></span>
          <div>
            <span>Cost</span>
            <span>{`$${totalCost}`}</span>
          </div>
        </div>
        <div className='your-average-cost'>
          <h5>Your Average Cost</h5>
          <span className='owned-asset-cost'>{`$${totalCost}`}</span>
          <div>
            <span>Shares</span>
            <span>{`${numSharesOwned}`}</span>
          </div>
        </div>
        {console.log(user.shares[company.symbol])}
        {console.log(company)}
      </div>
    );
  }
}