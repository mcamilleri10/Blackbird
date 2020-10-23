# READ ME
## Intro
Blackbird is a stock trading web app that allows for paper trading of any common stocks listed in the NYSE or NASDAQ. Users are able to signup for an account, add funds, create watchlists, and search for & trade as many stocks as they would like. Blackbird does not use real currency and does not ask for any bank information - funds can be added by simply entering entering an amount.

**http://blackbird-aa.herokuapp.com/**

### Technologies Used In Building Blackbird
* Postgres v2.3
* Ruby on Rails v5.2
* React v16.13
* Redux v4.0
* Webpack
* Babel
* Heroku

### APIs and Third Party Resources
* IEX Cloud (Stock Market Data)
* Recharts  (Charts)
* Font Awesome (Logo & Icons)
* Freepik (Images)
* PNGHUT (Images)
* Robinhood (Images)

## Features
### Dynamic Live Search
Blackbird features a dynamic search bar that updates results as the user types - with color coded search matches. 

![search](https://github.com/troubadour10/Blackbird/blob/master/app/assets/images/search-ss.png "Search Results")

### Dynamic Graphs
Graphs are dynamically created based on a user selected date range. The color theme of the app, green or red, is based on whether the user's portfolio value is up or down for the day.

![chart](https://media.giphy.com/media/J1BT9MYI9jmZKJsdSt/giphy.gif)

One problem that needed to be solved was how to account for any null price values that were occasionally returned from the api. The code snippet below shows how the incoming data was formated for input into recharts.

```
formatIntraData() {
    const { quotes, user } = this.props;
    const dataObj = {};
    quotes.forEach(quote => {
      if (this.isShareOwned(quote)) {
        let i = 0;
        const num_owned = user.shares[quote.symbol].numSharesOwned;
        let nullPrice;
        quote.intradayPrices.forEach(price => {
          if (i % 5 === 0) {
            i++;
            if (price.average === null) {
              price.average = nullPrice;
            }
            nullPrice = price.average;   
            let sum = 0;
            sum += (price.average * num_owned);
            if (dataObj[price.label]) {
              dataObj[price.label]['price'] += sum;
            } else {
              dataObj[price.label] = {
                'date/time': price.label,
                'price': sum
              };
            }
          } else {
            i++;
            null;
          }
        });
      }
    });
    this.setState({ data: Object.values(dataObj) });
  }
```

### Transaction Forms
Users are able to buy and sell shares using either shares or dollars as input. The transaction form dynamically adjusts if a user owns any shares in that company.

![buy1](https://github.com/troubadour10/Blackbird/blob/master/app/assets/images/buy1.png)
![buy2](https://github.com/troubadour10/Blackbird/blob/master/app/assets/images/buy2.png)
![buy3](https://github.com/troubadour10/Blackbird/blob/master/app/assets/images/buy3.png)

#### Future Implementation
* Users will soon be able to add or remove companies from their watchlists
* The main dashboard page will include a news feed of companies that make up a user's owned/watched companies
