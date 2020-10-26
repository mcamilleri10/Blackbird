const iex_test_key = 'Tpk_c2b1b5e41fc9492eadc4c2968a80494f';
const iex_key = 'pk_20832945260b49c1b7c2477ef9499ddf';


export const requestCompanyInfo = symbol => {
  return $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/company/quote?token=${iex_key}`
  });
};

export const requestIntradayPrices = symbol => {
  return $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${iex_key}`
  });
};

export const requestHistoricalPrices = (symbol, range) => {
  return $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/chart/${range}?token=${iex_key}`
  });
};

export const requestBatchIntradayPrices = symbols => {
  return $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=intraday-prices&token=${iex_key}`
  });
};

export const requestBatchHistoricalPrices = (symbols, range) => {
  return $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=chart&range=${range}&token=${iex_key}`
  });
};

export const requestQuote = (symbol) => {
  return $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/${symbol}/batch?types=quote,intraday-prices&token=${iex_key}`
  });
};

export const requestQuotes = (symbols) => {
  return $.ajax({
    url: `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols}&types=quote,intraday-prices&token=${iex_key}`
  });
};

export const fetchCompany = (symbol) => {
  return $.ajax({
    url: `/api/companies/${symbol}`
  });
};

export const saveCompany = companyId => {
  return $.ajax({
    url: '/api/companies',
    method: 'post',
    data: { company: {symbol: companyId}}
  });
};

// export const symbolSearch = fragment => {
//   return $.ajax({
//     url: `https://sandbox.iexapis.com/stable/search/${fragment}?token=${iex_test_key}`
//   });
// };





