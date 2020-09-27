import React from 'react';
import ShareIndex from './shares/share_index';
import WatchlistIndex from './watchlists/watchlist_index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class DashboardSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      watchlistInput: '',
      listFormActive: false
    };
    this.listFormClick = this.listFormClick.bind(this);
    this.listFormBlur = this.listFormBlur.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.listFormChange = this.listFormChange.bind(this);
  }


  componentDidMount() {
    // this.props.startLoading();
    // debugger
    // this.props.fetchUser(this.props.match.params.userId);
      // .then(() => this.fetchRealtimeQuotes());
  }

  
  listFormClick() {
    this.setState({ listFormActive: true });
  }

  listFormBlur() {
    this.setState({ listFormActive: false });
  }

  listFormChange(e) {
    this.setState({ watchlistInput: e.currentTarget.value });
  }

  formSubmit(e) {
    e.preventDefault();
    console.log(this.state.watchlistInput);
  }

  
  render() {
    // debugger
    const { shares, watchlists, quotes, loading } = this.props;
    const plusSign = <FontAwesomeIcon icon={faPlus} />;
    return (
      <div className='dashboard-sidebar'>
        <div className='share-index-component'>
          <ShareIndex
          shares={shares} 
          quotes={quotes} 
          loading={loading}
        />
        </div>
        <div className='dashboard-watchlist-form-component'>
          <h3>Lists</h3>
          <button 
            className='plus-sign' 
            onClick={this.listFormClick} 
            // onBlur={this.listFormBlur}
          >
            {plusSign}
          </button>
        </div>
        {this.state.listFormActive ? (
          <form onSubmit={this.formSubmit} className='sidebar-form' onClick={e => e.stopPropagation()}>
            <input 
              type="text" 
              value={this.state.watchlistInput} 
              onChange={this.listFormChange}
            />
            <button className='cancel-btn' type='button' onClick={this.listFormBlur}>Cancel</button>
            <button className='create-list-btn'>Create List</button>
          </form>
        ) : (
          null
        )}
        <div className='watchlist-index-component'>
          <WatchlistIndex
            watchlists={watchlists}
            quotes={quotes}
            loading={loading}
          />
        </div>
      </div>
    );
  }
}