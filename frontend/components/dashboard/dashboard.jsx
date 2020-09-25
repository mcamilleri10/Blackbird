import React from 'react';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.calculateTotalValue = this.calculateTotalValue.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.watchlistIds.forEach(watchlistId => {
      this.props.fetchWatchlist(watchlistId);
    });
  }

  calculateTotalValue() {
    const sum = 0;
    const { shares, requestQuote } = this.props;
    shares.forEach(share => {
      // debugger
      console.log(share.companyId);
      requestQuote(share.companyId).then(console.log(share.symbol));

    });
  }






  render() {
    // debugger
    return (
      <div>
        Dashboard Placeholder
        <button onClick={this.calculateTotalValue}>calculate total value</button>
        <br/>
        <div>
          Dashboard Sidebar Placeholder
        </div>
      </div>
    );
  }
}