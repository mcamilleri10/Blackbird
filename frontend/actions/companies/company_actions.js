import * as CompaniesApiUtil from '../../util/companies/companies_api_util';

export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';
export const RECEIVE_QUOTES = 'RECEIVE_QUOTES';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';
export const RECEIVE_INTRADAY_PRICES = 'RECEIVE_INTRADAY_PRICES';


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

const receiveIntradayPrices = (prices, symbol) => {
  return {
    type: RECEIVE_INTRADAY_PRICES,
    prices,
    symbol
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


// export const symbolSearch = fragment => {
//   return dispatch => {
//     return IexApiUtil.symbolSearch(fragment)
//       .then(company => dispatch(receiveCompany(company)));
//   };
// };
