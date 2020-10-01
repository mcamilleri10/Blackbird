const iex_test_key = 'Tpk_c2b1b5e41fc9492eadc4c2968a80494f';
const iex_key = 'pk_d120548e43e84c93ae0cd2512a4a5d3d';

export const symbolSearch = fragment => {
  return $.ajax({
    url: `https://cloud.iexapis.com/stable/search/${fragment}?token=${iex_key}`
  });
};