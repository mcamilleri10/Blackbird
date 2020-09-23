import * as IexApiUtil from '../../util/iex/iex_api_util';

export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';
export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';


const receiveQuote = quote => {
  return {
    type: RECEIVE_QUOTE,
    quote
  };
};

const receiveCompany = company => {
  // debugger
  return {
    type: RECEIVE_COMPANY,
    company
  };
};


export const fetchQuote = symbol => {
  return dispatch => {
    return IexApiUtil.fetchQuote(symbol)
      .then(quote => dispatch(receiveQuote(quote.responseJSON)));
  };
};


export const fetchCompany = symbol => {
  return dispatch => {
    return IexApiUtil.saveCompany(symbol).then(company => {
      return (
        dispatch(receiveCompany(company))
      );
    });
  };
};