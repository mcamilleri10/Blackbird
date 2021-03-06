import React from 'react';

export default class SellInDollarsForm extends React.Component {

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
    const numShares = Math.floor(input / company.latestPrice);
    if (input === '') {
      this.setState({ inputVal: '', error: null });
    } else {
      this.setState({
        inputVal: parseFloat(input),
        numSharesOwned: numShares,
        totalCost: parseFloat((numShares * company.latestPrice).toFixed(2))
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
      this.setState({ inputVal: '' });
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
    const { user, company, color, updateUser } = this.props;
    const { inputVal, error } = this.state;
    if (!company) return null;
    return (
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
          <span>{inputVal < company.latestPrice ? (
            0
          ) : (
              Math.floor(inputVal / company.latestPrice)
            )}
          </span>
        </div>
        <button className={`${color}-bg ${color}-hlite`}>Sell Shares</button>
        {error ? <div className='share-error red'>{error}</div> : null}
      </form>
    );
  }
}