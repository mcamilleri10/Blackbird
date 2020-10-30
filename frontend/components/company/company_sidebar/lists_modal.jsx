import React from 'react';

export default class ListsModal extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const { watchlists, company } = this.props;
    console.log(watchlists);
    return (
      <div className='lists-modal'>im a modal
        <form>
          {Object.values(watchlists).map(watchlist => {
            return (
              <div key={watchlist.id}>
                <input 
                  type="checkbox"
                  id="watchlist"
                  value={watchlist.id}
                  onChange={this.handleChange}
                  checked={watchlist.companyIds.includes(company.symbol)}
                />
                <label htmlFor="watchlist">{watchlist.name}</label>
              </div>
            );
          })}
        </form>
      </div>
    );
  }

}