import React from 'react';

export default class InvestInDollarsForm extends React.Component {

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
      <form onSubmit={this.handleSubmit} className='invest-in-dollars-form'>
        <div className='dollars-input-div'>
          <label>Amount</label>
          <input
            className={`dollars-input ${color}-bfocus`}
            type="number"
            value={inputValue}
            onChange={this.handleChange}
            placeholder='$0.00'
          />
        </div>
        <div className='estimated-quantity'>
          <span>Est. Quantity</span>
          <span>{inputValue < company.iexRealtimePrice ? (
            0
          ) : (
            Math.floor(inputValue / company.iexRealtimePrice)
          )}
          </span>
        </div>
        <button className={`${color}-bg ${color}-hlite`}>Purchase Shares</button>
      </form>
    );
  }


}