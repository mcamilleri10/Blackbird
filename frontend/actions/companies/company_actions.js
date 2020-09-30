import * as CompaniesApiUtil from '../../util/companies/companies_api_util';

export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';
export const RECEIVE_QUOTES = 'RECEIVE_QUOTES';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';
export const RECEIVE_INTRADAY_PRICES = 'RECEIVE_INTRADAY_PRICES';
// export const RECEIVE_BATCH_INTRADAY_PRICES = 'RECEIVE_BATCH_INTRADAY_PRICES';
export const RECEIVE_HISTORICAL_PRICES = 'RECEIVE_HISTORICAL_PRICES';
export const RECEIVE_BATCH_HISTORICAL_PRICES = 'RECEIVE_BATCH_HISTORICAL_PRICES';
// export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const START_LOADING = 'START_LOADING';

const receiveQuote = quote => {
  return {
    type: RECEIVE_QUOTE,
    quote
  };
};

const receiveQuotes = quotes => {
  return {
    type: RECEIVE_QUOTES,
    quotes
  };
};

const receiveCompany = company => {
  return {
    type: RECEIVE_COMPANY,
    company
  };
};

// const receiveSearchResults = results => {
//   return {
//     type: RECEIVE_SEARCH_RESULTS,
//     results
//   };
// };

const receiveIntradayPrices = (prices, symbol) => {
  return {
    type: RECEIVE_INTRADAY_PRICES,
    prices,
    symbol
  };
};

// const receiveBatchIntradayPrices = prices => {
//   return {
//     type: RECEIVE_BATCH_INTRADAY_PRICES,
//     prices
//   };
// };

const receiveHistoricalPrices = (prices, symbol) => {
  return {
    type: RECEIVE_HISTORICAL_PRICES,
    prices, 
    symbol
  };
};

const receiveBatchHistoricalPrices = prices => {
  return {
    type: RECEIVE_BATCH_HISTORICAL_PRICES,
    prices
  };
};

export const startLoading = () => {
  return {
    type: START_LOADING
  };
};


export const fetchCompany = companyId => {
  return dispatch => {
    return CompaniesApiUtil.fetchCompany(companyId).then(company => {
      return CompaniesApiUtil.requestCompanyInfo(company.symbol).then(company => {
        return dispatch(receiveCompany(company));
      });
    });
  };
};

export const requestQuote = symbol => {
  return dispatch => {
    return CompaniesApiUtil.requestQuote(symbol)
      .then(quote => dispatch(receiveQuote(quote)));
  };
};

export const requestQuotes = symbols => {
  return dispatch => {
    dispatch(startLoading());
    return CompaniesApiUtil.requestQuotes(symbols)
      .then(quotes => dispatch(receiveQuotes(quotes)));
  };
};

export const requestIntradayPrices = symbol => {
  return dispatch => {
    return CompaniesApiUtil.requestIntradayPrices(symbol)
      .then(prices => dispatch(receiveIntradayPrices(prices, symbol.toUpperCase())));
  };
};

// export const requestBatchIntradayPrices = symbols => {
//   return dispatch => {
//     return CompaniesApiUtil.requestBatchIntradayPrices(symbols)
//       .then(prices => dispatch(receiveBatchIntradayPrices(prices)));
//   };
// };

export const requestHistoricalPrices = (symbol, range) => {
  return dispatch => {
    return CompaniesApiUtil.requestHistoricalPrices(symbol, range)
      .then(prices => dispatch(receiveHistoricalPrices(prices, symbol)));
  };
};

export const requestBatchHistoricalPrices = (symbols, range) => {
  return dispatch => {
    return CompaniesApiUtil.requestBatchHistoricalPrices(symbols, range)
      .then(prices => dispatch(receiveBatchHistoricalPrices(prices)));
  };
};


// export const symbolSearch = fragment => {
//   return dispatch => {
//     return CompaniesApiUtil.symbolSearch(fragment)
//       .then(results => dispatch(receiveSearchResults(results)));
//   };
// };
