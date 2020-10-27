import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CreateWatchlistForm from '../../dashboard/dashboard_sidebar/watchlists/create_watchlist_form';

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
      </div>
    );
  }
}