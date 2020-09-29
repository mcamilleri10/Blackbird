import { RECEIVE_SEARCH_RESULTS } from '../../../actions/search/search_actions';

const searchReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      const usOnly = [];
      action.results.forEach(result => {
        if (result.region === 'US') {
          usOnly.push(result);
        }
      });
      return usOnly;
    default:
      return state;
  }

};

export default searchReducer;