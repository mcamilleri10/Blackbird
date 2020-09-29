import React from 'react';
import { Link } from 'react-router-dom';
import SearchResultItem from './search_result_item';

export default class SearchResults extends React.Component {



  render() {
    const { searchResults } = this.props;
    if (!searchResults) return null;
    // debugger
    return (
      <div>
        {(typeof searchResults[0] === 'undefined') ? (
          null
        ) : (
          <div className='search-results'>
            <ul>
              {searchResults.slice(0, 5).map(result => {
                // debugger
                return (
                  <SearchResultItem 
                    key={result.symbol}
                    symbol={result.symbol}
                    name={result.securityName}
                  />
                );
              })}

            </ul>
          </div>
        )}
      </div>
    );
  }

}