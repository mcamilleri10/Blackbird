import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default class ListsModal extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.watchlistLabel = this.watchlistLabel.bind(this);
  }

  handleChange(e) {
    const { 
      watchlists, 
      company, 
      addCompanyToWatchlist, 
      removeCompanyFromWatchlist 
    } = this.props;
    const watchlist = watchlists[e.currentTarget.value];
    const ids = watchlist.companyIds;
    const symbol = company.symbol;
    if (e.currentTarget.checked) {
      // add company to watchlist
      ids.push(symbol);
      addCompanyToWatchlist(watchlist);
    } else {
      // remove company from watchlist
      const i = ids.indexOf(symbol);
      ids.splice(i, 1);
      removeCompanyFromWatchlist(watchlist);
    }
  }

  watchlistLabel(watchlist) {
    const symbol = this.props.company.symbol;
    const length = watchlist.companyIds.length;
    if (watchlist.companyIds.includes(symbol)) {
      return `${symbol} is already in this list`;
    } else if (length === 1) {
      return '1 item';
    } else {
      return `${length} items`;
    }
  }

  render() {
    const { watchlists, company, closeModal, closeModalBtn, color } = this.props;
    const x = <FontAwesomeIcon icon={faTimes} />;
    return (
      <div className='lists-modal-bg' onClick={closeModal}>
        <div className='lists-modal'>
          <div className='lists-modal-header'>
            <span className='lists-modal-title'>Add {company.symbol} to Lists</span>
            <button className='lists-modal-close' onClick={closeModalBtn}>{x}</button>
          </div>
          <form>
            {Object.values(watchlists).map(watchlist => {
              return (
                <div key={watchlist.id} className='lists-modal-item'>
                  <input
                    className={`lists-modal-checkbox ${color}-cb`}
                    type="checkbox"
                    id={`watchlist-${watchlist.id}`}
                    value={watchlist.id}
                    onChange={this.handleChange}
                    checked={watchlist.companyIds.includes(company.symbol)}
                  />
                  <label htmlFor={`watchlist-${watchlist.id}`}>{watchlist.name}</label>
                  <div className='lists-modal-item-labels'>
                    <span>{this.watchlistLabel(watchlist)}</span>
                  </div>
                </div>
              );
            })}
          </form>
        </div>
      </div>
    );
  }

}