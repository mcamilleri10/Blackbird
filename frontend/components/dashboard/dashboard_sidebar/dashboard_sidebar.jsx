import React from 'react';
import ShareIndex from './share_index';

export default class DashboardSidebar extends React.Component {


  componentDidMount() {
  }
  
  render() {
    // debugger
    const { shares, quotes } = this.props;
    return (
      <div className='dashboard-sidebar'>
        <div className='share-index-component'>
          <ShareIndex shares={shares} quotes={quotes} />
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