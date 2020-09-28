import React from 'react';

export default class SearchResults extends React.Component {



  render() {
    const { searchResults } = this.props;
    const results = searchResults.slice(0, 5);
    return (
      <div>
        {(typeof results[0] === 'undefined') ? (
          null
        ) : (
          <div>
            <ul>
              {results.forEach(result => {
                return (
                  <li key={result.symbol}>
                    <div>{result.symbol}</div>
                    <div>{result.securityName}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }

}