import React from 'react';
import InvestInSharesForm from './share_forms/invest_in_shares_form';
import InvestInDollarsForm from './share_forms/invest_in_dollars_form';

export default class CompanySidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectValue: 'shares',
      sellFormActive: false,
      activeBuyBtn: true,
      activeSellBtn: false
    };
    this.handleBuyBtnClick = this.handleBuyBtnClick.bind(this);
    this.handleSellBtnClick = this.handleSellBtnClick.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidUpdate() {
    const { user, company } = this.props;
    const ownedCompanies = Object.keys(user.shares);
    if (this.state.sellFormActive === true) {
      return null;
    } else if (ownedCompanies.includes(company.symbol)) {
      this.setState({ sellFormActive: true });
    }
  }

  handleBuyBtnClick() {
    this.setState({ activeBuyBtn: true, activeSellBtn: false });
  }
  
  handleSellBtnClick() {
    this.setState({ activeBuyBtn: false, activeSellBtn: true });
  }

  handleSelectChange(e) {
    this.setState({ selectValue: e.target.value });
  }

  render() {
    const { user, company, color, createShare, updateUser } = this.props;
    const { selectValue, sellFormActive, activeBuyBtn, activeSellBtn } = this.state;
    if (!company) return null;
    return (
      <div className='company-sidebar'>
        <div className='company-sidebar-title'>
          {sellFormActive ? (
            <div className='share-form-title-btns'>
              <button className='share-form-title-btn'
                className={activeBuyBtn ? (`buy-btn ${color}-h` + ` ${color}` + `-bb2`) : (`buy-btn pad2 ${color}-h`)}
                onClick={this.handleBuyBtnClick}
                >Buy {company.symbol}
              </button>
              <button 
                className={activeSellBtn ? (`sell-btn ${color}-h` + ` ${color}` + `-bb2`) : (`sell-btn pad2 ${color}-h`)}
                onClick={this.handleSellBtnClick}
              >Sell {company.symbol}</button>
            </div>
          ) : (
            <h3>Buy {company.symbol}</h3>
          )}
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
              createShare={createShare}
              updateUser={updateUser}
            />
          ) : (
            <InvestInDollarsForm
              user={user}
              company={company}
              color={color}
              createShare={createShare}
              updateUser={updateUser}
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