import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import ShareIndexItem from './share_index_item';

export default class ShareIndex extends React.Component {

  constructor(props) {
    super(props); 
  }

  render() {
    const { shares, quotes, loading } = this.props;
    const spinner = <FontAwesomeIcon icon={faSpinner} className='spinner' spin/>;
    
    if (loading) {
      // debugger
      return <div>{spinner}</div>;
    }
    if (!shares) {
      return null;
    }
      
    // debugger
    return (
      <div className='share-index'>
        <div className='share-index-title'>
          <h3>Stocks</h3>
          <button className='share-index-dd'>
            ...
          </button>
        </div>
        <div>
          <ul className='share-index-list'>
            {shares.map(share => {
              return (
                <ShareIndexItem 
                  key={share.id} 
                  share={share} 
                  quote={quotes[share.companyId]}
                  loading={loading}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

}