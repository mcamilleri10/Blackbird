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
    this.props.updateUser(this.props.user);
    this.setState({ availableFunds: '' });
  }

  render() {
    const { user } = this.props;
    return (
      <div className='buying-power-form-container'>
        <div className='buying-power-left'>
          <form onSubmit={this.handleSubmit} className='buying-power-form'>
            <input 
              type="text" 
              onChange={this.handleChange}
              placeholder='Add Funds'
            />
            <div>
              <p>Buying Power</p>
              <p>${user.availableFunds.toFixed(2)}</p>
            </div>
            <button>Add Funds</button>
          </form>
        </div>
        <div className='buying-power-right'>
          <p>
            Buying power represents the total value of stocks you can 'purchase'.          
          </p>
        </div>
      </div>
    );
  }
}