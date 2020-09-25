const iex_test_key = 'Tpk_c2b1b5e41fc9492eadc4c2968a80494f';


export const requestCompanyInfo = symbol => {
  return $.ajax({
    url: `https://sandbox.iexapis.com/stable/stock/${symbol}/company/quote?token=${iex_test_key}`
  });
};

export const requestIntradayPrices = symbol => {
  return $.ajax({
    url: `https://sandbox.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${iex_test_key}`
  });
};

export const requestQuote = (symbol) => {
  return $.ajax({
    url: `https://sandbox.iexapis.com/stable/stock/${symbol}/quote?token=${iex_test_key}`
  });
};

export const requestQuotes = (symbols) => {
  return $.ajax({
    url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote&token=${iex_test_key}`
  });
};

export const fetchCompany = (symbol) => {
  return $.ajax({
    url: `/api/companies/${symbol}`
  });
};

export const saveCompany = company => {
  return $.ajax({
    url: '/api/companies',
    method: 'post',
    data: { company: {symbol: company.symbol, name: company.companyName} }
  });
};

// export const symbolSearch = fragment => {
//   return $.ajax({
//     url: `https://sandbox.iexapis.com/stable/search/${fragment}?token=${iex_key}`
//   });
// };





