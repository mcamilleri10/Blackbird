const iex_test_key = 'Tpk_c2b1b5e41fc9492eadc4c2968a80494f';

export const symbolSearch = fragment => {
  return $.ajax({
    url: `https://sandbox.iexapis.com/stable/search/${fragment}?token=${iex_test_key}`
  });
};