import React from 'react';

export default class BuyingPowerForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      availableFunds: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ availableFunds: parseFloat(e.currentTarget.value) });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.user.availableFunds += this.state.availableFunds;
    // debugger
    this.props.updateUser(this.props.user);
  }

  render() {
    return (
      <div className='buying-power-form'>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.availableFunds}
            onChange={this.handleChange}
          />
          <button>Add Funds</button>
        </form>
      </div>
    );
  }
}