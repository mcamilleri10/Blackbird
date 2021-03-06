import React from 'react';
import SearchResultItem from './search_result_item';

export default class SearchResults extends React.Component {



  render() {
    const { searchResults, searchValue, closeResults, color } = this.props;
    if (!searchResults) return null;
    return (
      <div className='search-results'>
        {searchResults.length < 1 ? (
          <p className='search-error'>
            We were unable to find any results for your search.
          </p>
        ) : (
          <div>
            <h5 className='search-title'>Stocks</h5>
              <ul className='search-results-ul'>
              {searchResults.slice(0, 5).map(result => {
                return (             
                    <SearchResultItem 
                      key={result.symbol}
                      symbol={result.symbol}
                      name={result.securityName}
                      searchValue={searchValue}
                      color={color}
                      closeResults={closeResults}
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