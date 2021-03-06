import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

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
    if (e.currentTarget.value === '') {
      this.setState({ availableFunds: '' });
    } else {
      this.setState({ availableFunds: parseFloat(e.currentTarget.value) });
    }
  }

  handleSubmit(e) {
    const { user, updateUser, calculateTotalValue } = this.props;
    e.preventDefault();
    if (this.state.availableFunds === '') {
      user.availableFunds;
    } else {
      user.availableFunds += this.state.availableFunds;
    }
    this.setState({ availableFunds: '' });
    calculateTotalValue();
    updateUser(user);
  }

  render() {
    const { user, color } = this.props;
    const dollarSign = <FontAwesomeIcon icon={faDollarSign} />;
    return (
      <div className='buying-power-form-container'>
        <div className='buying-power-left'>
          <form onSubmit={this.handleSubmit} className='buying-power-form'>
            <div className='buying-power-dollar-sign'>
              {dollarSign}
            <input 
              type="number" 
              onChange={this.handleChange}
              value={this.state.availableFunds}
              placeholder='Add Funds'
              />
            </div>
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