import React from 'react';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.shares.forEach(shareId => {
    //   this.props.fetchShare(shareId);
    // });
    // this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    // debugger
    return (
      <div>
        Dashboard Placeholder
        <br/>
        <button onClick={this.props.logout}>CLICK TO LOGOUT</button>
      </div>
    );
  }
}