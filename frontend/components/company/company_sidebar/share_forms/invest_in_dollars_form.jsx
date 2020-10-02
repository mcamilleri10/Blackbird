import React from 'react';
import SellInDollarsForm from './sell_in_dollars_form';

export default class InvestInDollarsForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      userId: this.props.user.id,
      companyId: this.props.company.symbol,
      numSharesOwned: 0,
      totalCost: null,
      error: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { company } = this.props;
    const input = e.currentTarget.value;
    const numShares = Math.floor(input / company.iexRealtimePrice);
    if (input === '') {
      this.setState({ inputVal: '', error: null });
    } else {
      this.setState({
        inputVal: parseFloat(input),
        numSharesOwned: numShares,
        totalCost: parseFloat((numShares * company.iexRealtimePrice).toFixed(2))
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { user, company, createShare, updateUser, updateShare, shareOwned } = this.props;
    const { totalCost, numSharesOwned } = this.state;
    if (user.availableFunds < this.state.totalCost) {
      this.setState({ error: 'Insufficient Funds' });
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
      this.setState({ inputVal: '' });
    }
  }

  render() {
    const { user, company, color, activeSellBtn, updateUser, deleteShare,
      updateShare
    } = this.props;
    const { inputVal, error } = this.state;
    if (!company) return null;
    // debugger
    return (
      <div>
        {activeSellBtn ? (
          <SellInDollarsForm
            user={user}
            company={company}
            color={color}
            updateUser={updateUser}
            deleteShare={deleteShare}
            updateShare={updateShare}
          />
        ) : (
        <form onSubmit={this.handleSubmit} className='invest-in-dollars-form'>
          <div className='dollars-input-div'>
            <label>Amount</label>
            <input
              className={`dollars-input ${color}-bfocus`}
              type="number"
              value={inputVal}
              onChange={this.handleChange}
              placeholder='$0.00'
            />
          </div>
          <div className='estimated-quantity'>
            <span>Est. Quantity</span>
            <span>{inputVal < company.iexRealtimePrice ? (
              0
            ) : (
              Math.floor(inputVal / company.iexRealtimePrice)
            )}
            </span>
          </div>
          <button className={`${color}-bg ${color}-hlite`}>Purchase Shares</button>
          {error ? <div className='share-error red'>{error}</div> : null}
        </form>
        )}
      </div>
    );
  }


}