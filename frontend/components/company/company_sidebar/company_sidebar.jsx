import React from 'react';

export default class CompanySidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      selectValue: 'shares'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleChange(e) {
    if (e.currentTarget.value === '') { 
      this.setState({ inputValue: ''});
    } else {
      this.setState({ inputValue: parseFloat(e.currentTarget.value) });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.inputValue);
  }

  handleSelectChange(e) {
    this.setState({ selectValue: e.target.value });
  }



  render() {
    const { user, company, color } = this.props;
    const { inputValue, selectValue } = this.state;
    if (!company) return null;
    return (
      <div className='company-sidebar'>
        <div className='company-sidebar-title'>
          <h3>Buy {company.symbol}</h3>
        </div>
        <div className='share-form-container'>
          <form onSubmit={this.handleSubmit} className='buy-shares-form'>
            <div className='buy-shares-select'>
              <label>Invest In</label>
              <select value={selectValue} onChange={this.handleSelectChange}>
                <option value='shares'>Shares</option>
                <option value='dollars'>Dollars</option>
              </select>
            </div>
            {selectValue === 'shares' ? (
              <div className='invest-in-shares-form'>
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
                  <span>${inputValue * company.iexRealtimePrice.toFixed(2)}</span>
                </div>
                <button>Purchase Shares</button>
              </div>

            ) : (
              <div>

              </div>
            )}
            <div>
              <span>${user.availableFunds} Buying Power Available</span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}