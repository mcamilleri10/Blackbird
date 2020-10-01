import React from 'react';

export default class InvestInSharesForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.currentTarget.value === '') {
      this.setState({ inputValue: '' });
    } else {
      this.setState({ inputValue: parseFloat(e.currentTarget.value) });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.inputValue);
  }

  render() {
    const { user, company, color, handleChange } = this.props;
    const { inputValue } = this.state;
    if (!company) return null;
    // debugger
    return (
      <form onSubmit={this.handleSubmit} className='invest-in-shares-form'>
        <div className='shares-input-div'>
          <label>Shares</label>
          <input
            className={`shares-input ${color}-bfocus`}
            type="number"
            value={inputValue}
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
          <span>${(inputValue * company.iexRealtimePrice).toFixed(2)}</span>
        </div>
        <button className={`${color}-bg ${color}-hlite`}>Purchase Shares</button>
      </form>
    );
  }


}