import React from 'react';
import InvestInSharesForm from './share_forms/invest_in_shares_form';
import InvestInDollarsForm from './share_forms/invest_in_dollars_form';

export default class CompanySidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectValue: 'shares'
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
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
          <form onSubmit={this.handleSubmit} className='shares-select-form'>
            <label>Invest In</label>
            <select value={selectValue} onChange={this.handleSelectChange}>
              <option value='shares'>Shares</option>
              <option value='dollars'>Dollars</option>
            </select>
          </form>
          {selectValue === 'shares' ? (
            <InvestInSharesForm 
              user={user} 
              company={company} 
              color={color}
            />
          ) : (
            <InvestInDollarsForm
              user={user}
              company={company}
              color={color}
            />
          )}
            <span className={`buying-power-available ${color}`}>
              ${user.availableFunds.toFixed(2)} Buying Power Available
            </span>
        </div>
      </div>
    );
  }
}