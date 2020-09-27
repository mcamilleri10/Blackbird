import React from 'react';
import ShareIndex from './share_index';

export default class DashboardSidebar extends React.Component {

  constructor(props) {
    super(props);
  }


  componentDidMount() {
    // this.props.startLoading();
    // debugger
    this.props.fetchUser(this.props.match.params.userId);
      // .then(() => this.fetchRealtimeQuotes());
  }
  
  render() {
    // debugger
    const { shares, quotes, loading } = this.props;
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
          watchlist form placeholder
        </div>
        <div className='watchlist-index-component'>
          watchlist index placeholder
        </div>
      </div>
    );
  }
}