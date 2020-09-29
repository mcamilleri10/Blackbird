import React from 'react';
import SearchResultItem from './search_result_item';

export default class SearchResults extends React.Component {



  render() {
    const { searchResults, searchValue } = this.props;
    if (!searchResults) return null;
    // debugger
    return (
      <div className='search-results' onClick={e => e.stopPropagation()}>
        <ul>
          {searchResults.slice(0, 5).map(result => {
            return (
              <SearchResultItem 
                key={result.symbol}
                symbol={result.symbol}
                name={result.securityName}
                searchValue={searchValue}
              />
            );
          })}
        </ul>
      </div>
    );
  }
      
}