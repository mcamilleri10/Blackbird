const iex_key = 'Tpk_c2b1b5e41fc9492eadc4c2968a80494f';

export const fetchQuote = (symbol) => {
  return $.ajax({
    url: `https://sandbox.iexapis.com/stable/stock/${symbol}/quote?token=Tpk_c2b1b5e41fc9492eadc4c2968a80494f`
  });
};

export const fetchCompany = (symbol) => {
  return $.ajax({
    url: `https://sandbox.iexapis.com/stable/stock/${symbol}/company?token=${iex_key}`
    // success: company => saveCompany(company)
  });
};

export const saveCompany = company => {
  return $.ajax({
    url: '/api/companies',
    method: 'post',
    data: { company: {symbol: company.symbol, name: company.companyName} },
    success: company => fetchCompany(company.symbol)
  });
};


