import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import WatchlistDropdown from './watchlist_dropdown';

export default class WatchlistIndex extends React.Component {



  render() {
    const { watchlists, quotes, loading, color } = this.props;
    const spinner = <FontAwesomeIcon icon={faSpinner} spin />;

    if (loading) {
      return <div className='spinner'>{spinner}</div>;
    }

    return (
      <div className='watchlist-index'>
        {watchlists.map(watchlist => {
          return <WatchlistDropdown 
            key={watchlist.id} 
            watchlist={watchlist}
            quotes={quotes}
            loading={loading}
            color={color}
          />;
        })}
      </div>
    );
  }
}