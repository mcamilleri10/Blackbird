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
  return {
    type: RECEIVE_COMPANY,
    company
  };
};


export const fetchQuote = symbol => {
  return dispatch => {
    return IexApiUtil.fetchQuote(symbol)
      .then(quote => dispatch(receiveQuote(quote)));
  };
};


export const fetchCompany = companyId => {
  return dispatch => {
    return IexApiUtil.fetchCompany(companyId).then(company => { // id, name, symbol
      return IexApiUtil.fetchCompanyInfo(company.symbol).then(company => { // no id
        return dispatch(receiveCompany(company));
      });
    });
  };
};
