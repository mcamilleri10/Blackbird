import React from 'react';
import SellInSharesForm from './sell_in_shares_form';

export default class InvestInSharesForm extends React.Component {

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
        totalCost: parseFloat((inputVal * company.iexRealtimePrice).toFixed(2))
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { user, company, createShare, updateUser, updateShare, shareOwned } = this.props;
    const { totalCost, numSharesOwned } = this.state;
    if (user.availableFunds < this.state.totalCost) {
      this.setState({ error: 'Insufficient Funds'});
    } else {
      user.availableFunds -= totalCost;
      if (shareOwned) {
        const share = user.shares[company.symbol];
        share.numSharesOwned += numSharesOwned;
        share.totalCost += totalCost;
        updateShare(share)
          .then(() => updateUser(user));
      } else {
        createShare(this.state)
          .then(() => updateUser(user));
      }
      this.setState({ numSharesOwned: '' });
    }
  }




  render() {
    const { user, company, color, updateUser, activeSellBtn, deleteShare,
      updateShare
    } = this.props;
    const { numSharesOwned, error } = this.state;
    if (!company) return null;
    return (
      <div>
        {activeSellBtn ? (
          <SellInSharesForm 
            user={user}
            company={company}
            color={color}
            updateUser={updateUser}
            deleteShare={deleteShare}
            updateShare={updateShare}
          />
        ) : (
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
              <span>${company.iexRealtimePrice.toFixed(2)}</span>
            </div>
            <div className='estimated-cost'>
                <span>Estimated Cost</span>
              <span>${(numSharesOwned * company.iexRealtimePrice).toFixed(2)}</span>
            </div>
            <button className={`${color}-bg ${color}-hlite`}>Buy Shares</button>
            {error ? <div className='share-error red'>{error}</div> : null}
          </form>
        )}
      </div>
    );
  }


}