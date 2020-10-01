import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class CreateWatchlistForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      user_id: this.props.userId
    };
    this.listFormClick = this.listFormClick.bind(this);
    this.listFormBlur = this.listFormBlur.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.listFormChange = this.listFormChange.bind(this);
  }

  listFormClick() {
    this.setState({ listFormActive: true });
  }

  listFormBlur() {
    this.setState({
      listFormActive: false,
      name: ''
    });
  }

  listFormChange(e) {
    this.setState({ name: e.currentTarget.value });
  }

  formSubmit(e) {
    e.preventDefault();
    this.props.createWatchlist(this.state);
    this.setState({ name: '' });
    this.props.closeForm();
  }

  render() {
    const { closeForm, color } = this.props;
    return (
      <form onSubmit={this.formSubmit} className='dashboard-sidebar-form'>
        <input
          type="text"
          placeholder='List Name'
          onChange={this.listFormChange}
          className={`${color}-bfocus`}
        />
        <div>
          <button 
            className={`cancel-btn ${color} ${color}-b`} 
            type='button' 
            onClick={closeForm}
          >
            Cancel
          </button>
          <button className={`create-list-btn ${color}-bg ${color}-hlite`}>Create List</button>
        </div>
      </form>
    );
  }
  
}


