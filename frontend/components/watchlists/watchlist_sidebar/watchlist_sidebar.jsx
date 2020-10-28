import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CreateWatchlistForm from '../../dashboard/dashboard_sidebar/watchlists/create_watchlist_form';
import WatchlistIndex from '../../dashboard/dashboard_sidebar/watchlists/watchlist_index';

export default class WatchlistSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listFormActive: false
    };
    this.listFormClick = this.listFormClick.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }
  
  listFormClick() {
    this.setState({ listFormActive: true });
  }

  closeForm() {
    this.setState({ listFormActive: false });
  }

  render() {
    const { watchlists, quotes, loading, color } = this.props;
    const plusSign = <FontAwesomeIcon icon={faPlus} />;
    return (
      <div className='watchlist-sidebar'>
        <div className='watchlist-form-component'>
          <h3>Lists</h3>
          <button
            className={`plus-sign limegreen-h`}
            onClick={this.listFormClick}
          // onBlur={this.listFormBlur}
          >
            {plusSign}
          </button>
        </div>
        {this.state.listFormActive ? (
          <CreateWatchlistForm
            userId={this.props.match.params.userId}
            createWatchlist={this.props.createWatchlist}
            closeForm={this.closeForm}
            color='limegreen'
          />
        ) : (
          null
        )}
        <div className='watchlist-index-component'>
          <WatchlistIndex
            watchlists={watchlists}
            quotes={quotes}
            loading={loading}
            color={color}
          />
        </div>
      </div>
    );
  }
}