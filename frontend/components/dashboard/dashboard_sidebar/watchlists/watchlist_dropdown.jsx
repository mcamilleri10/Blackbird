import React from 'react';
import { Link } from 'react-router-dom';
import ShareIndexItem from '../shares/share_index_item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default class WatchlistDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ active: !this.state.active });
  }


  render() {
    const { watchlist, quotes, loading, color } = this.props;
    const downArrow = <FontAwesomeIcon icon={faAngleDown} />;
    const upArrow = <FontAwesomeIcon icon={faAngleUp} />;
    
    return (
      <div className='watchlist-dd' onClick={this.handleClick}>       
        <div className='watchlist-list-item'>
          <Link to={`/auth/watchlists/${watchlist.id}`} className='watchlist-link'>
            {watchlist.name}
          </Link>
          {this.state.active ? (
            <div className={`arrow ${color}-h`}>{upArrow}</div>
          ) : (
            <div className={`arrow ${color}-h`}>{downArrow}</div>
          )}
        </div>

        {this.state.active ? (
          watchlist.companyIds.map(symbol => {
            return (
              <ShareIndexItem
                key={symbol}
                quote={quotes[symbol]}
              />
            );
          })
        ) : (
          null
        )}

      </div>
    );
  }

}