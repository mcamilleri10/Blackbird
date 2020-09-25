import React from 'react';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.watchlists.forEach(watchlistId => {
      this.props.fetchWatchlist(watchlistId);
    });
  }

  render() {
    return (
      <div>
        Dashboard Placeholder
        <br/>
        <button onClick={this.props.logout}>CLICK TO LOGOUT</button>
        <div>
          Dashboard Sidebar Placeholder
        </div>
      </div>
    );
  }
}