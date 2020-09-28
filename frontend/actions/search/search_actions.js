import * as SearchApiUtil from '../../util/search/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';


const receiveSearchResults = results => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results
  };
};

export const symbolSearch = fragment => {
  return dispatch => {
    return SearchApiUtil.symbolSearch(fragment)
      .then(results => dispatch(receiveSearchResults(results)));
  };
};
