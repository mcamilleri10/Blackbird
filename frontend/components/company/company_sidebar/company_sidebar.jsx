import React from 'react';
import InvestInSharesForm from './share_forms/invest_in_shares_form';
import InvestInDollarsForm from './share_forms/invest_in_dollars_form';
import ListsModal from './lists_modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class CompanySidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectValue: 'shares',
      shareOwned: false,
      activeBuyBtn: true,
      activeSellBtn: false,
      companyInList: false,
      listsModalActive: false
    };
    this.handleBuyBtnClick = this.handleBuyBtnClick.bind(this);
    this.handleSellBtnClick = this.handleSellBtnClick.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleListsClick = this.handleListsClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeModalBtn = this.closeModalBtn.bind(this);
  }

  componentDidMount() {
    const { user, match, fetchUser } = this.props;
    fetchUser(user.id);
    this.isCompanyInList(user.watchlists, match);
  }

  componentDidUpdate() {
    const { user, company, match } = this.props;
    const ownedCompanies = Object.keys(user.shares);
    if (!company) return null;
    if (user.shares[company.symbol]) {
      const sharesOwned = user.shares[company.symbol].numSharesOwned;
      if (this.state.numSharesOwned !== sharesOwned) {
        this.setState({ numSharesOwned: sharesOwned});
      }
    }
    if (this.state.shareOwned && ownedCompanies.includes(company.symbol)) {
      return null;
    } else if (!ownedCompanies.includes(company.symbol) && this.state.shareOwned === false) {
      return null;
    } else if (!ownedCompanies.includes(company.symbol)) {
      this.setState({ 
        shareOwned: false,
        numSharesOwned: null,
        activeBuyBtn: true,
        activeSellBtn: false
      });
    } else {
      this.setState({ 
        shareOwned: true, 
        numSharesOwned: user.shares[company.symbol].numSharesOwned,
        share: user.shares[company.symbol]
      });
    }
    this.isCompanyInList(user.watchlists, match);
  }
  
  isCompanyInList(lists, match) {
    Object.values(lists).forEach(watchlist => {
      if (watchlist.companyIds.includes(match.params.companyId)) {
        this.setState({ companyInList: true });
      }
    });
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

  handleListsClick() {
    this.setState({ listsModalActive: true });
  }

  closeModal(e) {
    if (e.target.className === 'lists-modal-bg') {
      this.setState({ listsModalActive: false });
    }
  }

  closeModalBtn() {
    this.setState({ listsModalActive: false });
  }


  render() {
    const { user, company, color, createShare, updateUser, deleteShare, 
      updateShare, addCompanyToWatchlist, removeCompanyFromWatchlist, watchlists
    } = this.props;
    const { selectValue, shareOwned, activeBuyBtn, activeSellBtn, 
      numSharesOwned, companyInList, listsModalActive
    } = this.state;
    if (!company) return null;
    const plus = <FontAwesomeIcon icon={faPlus} />;
    const check = <FontAwesomeIcon icon={faCheck} />;
    return (
      <div className='company-right'>
        <div className='company-sidebar'>
          <div className='company-sidebar-title'>
            {shareOwned ? (
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
                activeSellBtn={activeSellBtn}
                deleteShare={deleteShare}
                updateShare={updateShare}
                shareOwned={shareOwned}
              />
            ) : (
              <InvestInDollarsForm
                user={user}
                company={company}
                color={color}
                createShare={createShare}
                updateUser={updateUser}
                activeSellBtn={activeSellBtn}
                deleteShare={deleteShare}
                updateShare={updateShare}
                shareOwned={shareOwned}
              />
            )}
            {activeBuyBtn ? (
              <span className={`share-form-footer ${color}`}>
                ${user.availableFunds.toFixed(2)} Buying Power Available
              </span>
            ) : (
              <div className='share-form-footer'>
                {numSharesOwned > 1 ? (
                  `${numSharesOwned} Shares Available`
                  ) : (
                  `${numSharesOwned} Share Available`
                )}
              </div>
            )}
          </div>
        </div>
        <button 
          className={`add-to-list-btn ${color} ${color}-b ${color}-hlite3`}
          onClick={this.handleListsClick}
        >
          {companyInList ? (
            <span className='add-to-lists-icon'>{check}</span>
          ) : (
            <span className='add-to-lists-icon'>{plus}</span>
          )}
          Add to Lists
        </button>
        {listsModalActive ? (
          <ListsModal 
            addCompanyToWatchlist={addCompanyToWatchlist} 
            removeCompanyFromWatchlist={removeCompanyFromWatchlist}
            watchlists={watchlists}
            company={company}
            closeModal={this.closeModal}
            closeModalBtn={this.closeModalBtn}
            color={color}
          />
        ) : (
          null
        )}
      </div>
    );
  }
}