import React from 'react';
import { updateShare } from '../../../../actions/shares/share_actions';

export default class SellInSharesForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.user.id,
      companyId: this.props.company.symbol,
      numSharesOwned: '',
      totalCost: null,
      error: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { company } = this.props;
    const inputVal = e.currentTarget.value;
    if (inputVal === '') {
      this.setState({ numSharesOwned: '', error: null });
    } else {
      this.setState({
        numSharesOwned: parseFloat(inputVal),
        totalCost: parseFloat((inputVal * company.latestPrice).toFixed(2))
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { user, company, updateUser, deleteShare, updateShare } = this.props;
    const { totalCost, numSharesOwned } = this.state;
    const share = user.shares[company.symbol];
    const numShares = share.numSharesOwned; // NUM SHARES ACTUALLY OWNED
    if (numShares < numSharesOwned) {
      this.setState({ error: 'Insufficient Shares Owned' });
    } else {
      user.availableFunds += totalCost;
      this.setState({ numSharesOwned: '' });
      if (numShares === numSharesOwned) {
        deleteShare(share.id)
          .then(() => updateUser(user));
      } else {
        share.totalCost = (share.totalCost - (share.totalCost / share.numSharesOwned * numSharesOwned));
        share.numSharesOwned -= numSharesOwned;
        updateShare(share)
          .then(() => updateUser(user));
      }
    }
  }


  render() {
    const { user, company, color, handleChange, activeSellBtn } = this.props;
    const { numSharesOwned, error } = this.state;
    if (!company) return null;
    return (
      <form onSubmit={this.handleSubmit} className='invest-in-shares-form'>
        <div className='shares-input-div'>
          <label>Shares</label>
          <input
            className={`shares-input ${color}-bfocus`}
            type="number"
            value={numSharesOwned}
            onChange={this.handleChange}
            placeholder='0'
          />
        </div>
        <div className='market-price-div'>
          <span className={`market-price ${color}`}>Market Price</span>
          <span>${company.latestPrice.toFixed(2)}</span>
        </div>
        <div className='estimated-cost'>
          <span>Estimated Credit</span>
          <span>${(numSharesOwned * company.latestPrice).toFixed(2)}</span>
        </div>
        <button className={`${color}-bg ${color}-hlite`}>Sell Shares</button>
        {error ? <div className='share-error red'>{error}</div> : null}
      </form>
    );
  }


}