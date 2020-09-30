import React from 'react';
import SearchResults from './search_results';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      resultsActive: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.resultsActive = this.resultsActive.bind(this);
    this.resultsInactive = this.resultsInactive.bind(this);
    this.closeResults = this.closeResults.bind(this);
  }

  handleChange(e) {
    this.setState(({ searchValue: e.currentTarget.value }),
      this.initiateSearch);
  }

  initiateSearch() {
    if (this.state.searchValue.length > 0) {
      this.resultsActive();
      this.props.symbolSearch(this.state.searchValue);
    } else {
      this.closeResults();
    }
  }

  resultsActive() {
    if (this.state.searchValue.length > 0) {
      this.setState({ resultsActive: true });
    }
  }

  resultsInactive(e) {
    if (!event.currentTarget.contains(e.relatedTarget)) {
      this.setState({ resultsActive: false });
    }
  }

  closeResults() {
    // debugger
    this.setState({ resultsActive: false, searchValue: '' });
  }
  

  render() {
    const { searchResults, color } = this.props;
    const search = <FontAwesomeIcon icon={faSearch} />;
    if (this.state.searchValue === '') this.closeResults;
    // debugger
    return (
      <div className='search-bar'>
        <div className='search-icon'>{search}</div>
        <form>
          <input
            type="text"
            placeholder='Search'
            value={this.state.searchValue}
            onChange={this.handleChange}
            onFocus={this.resultsActive}
            // onBlur={this.resultsInactive}
          />
        </form>
        {this.state.resultsActive ? (
          <SearchResults
            searchResults={searchResults} 
            searchValue={this.state.searchValue}
            color={color}
            closeResults={this.closeResults}
          />
        ) : (
          null
        )}
      </div>
    );
  }

}