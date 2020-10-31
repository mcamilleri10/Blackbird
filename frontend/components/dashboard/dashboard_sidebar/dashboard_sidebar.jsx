import React from 'react';
import ShareIndex from './shares/share_index';
import WatchlistIndex from './watchlists/watchlist_index';
import CreateWatchlistForm from './watchlists/create_watchlist_form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


export default class DashboardSidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // name: '',
      // userId: this.props.match.params.userId,
      listFormActive: false
    };
    this.listFormClick = this.listFormClick.bind(this);
    this.closeForm = this.closeForm.bind(this);
    // this.listFormBlur = this.listFormBlur.bind(this);
    // this.formSubmit = this.formSubmit.bind(this);
    // this.listFormChange = this.listFormChange.bind(this);
  }


  componentDidMount() {
    // this.props.startLoading();
    // this.props.fetchUser(this.props.match.params.userId);
      // .then(() => this.fetchRealtimeQuotes());
  }

  
  
  listFormClick() {
    this.setState({ listFormActive: true });
  }

  closeForm() {
    this.setState({ listFormActive: false });
  }
 
  
  render() {
    const { shares, watchlists, quotes, loading, color } = this.props;
    const plusSign = <FontAwesomeIcon icon={faPlus} />;
    return (
      <div className='dashboard-sidebar'>
        <div className='share-index-component'>
          <ShareIndex
          shares={shares} 
          quotes={quotes} 
          loading={loading}
          color={color}
          />
        </div>
        <div className='dashboard-watchlist-form-component'>
          <h3>Lists</h3>
          <button 
            className={`plus-sign ${color}-h`} 
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
            color={color}
          />
        ) : (
          null
        )}        
        <div className='dashboard-watchlist-index-component'>
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





