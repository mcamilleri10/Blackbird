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
    // console.log(this.state.name);
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






















// constructor(props) {
//   super(props);
//   this.state = {
//     active: false,
//     watchlistInput: ''
//   };
//   this.handleClick = this.handleClick.bind(this);
//   this.handleBlur = this.handleClick.bind(this);
//   this.handleChange = this.handleChange.bind(this);
// }

// handleClick() {
//   this.setState({ active: !this.state.active });
// }

// handleBlur() {
//   this.setState({ active: false });
// }

// handleChange(e) {
//   this.setState({ watchlistInput: e.currentTarget.value });
// }

// handleSubmit(e) {
//   e.preventDefault();
//   console.log(this.state.watchlistInput);
// }

// render() {
//   const plusSign = <FontAwesomeIcon icon={faPlus} />;
//   return (
//     <div>
//       <h3>Lists</h3>
//       <button 
//         onBlur={this.handleBlur} 
//         onClick={this.handleClick} 
//         className='watchlist-form-dd-btn'
//       >
//         <div className='plus-sign'>{plusSign}</div>
//         {this.state.active ? (
//           <form onClick={e => e.stopPropagation()} >
//             <input 
//               type="text"
//               value={this.state.watchlistInput}
//               onChange={this.handleChange}
//               onClick={e => e.stopPropagation()}
//             />
//             <button className='cancel-btn' type='button'>Cancel</button>
//             <button className='create-list-btn'>Create List</button>
//           </form>
//         ) : (
//           null
//         )}
//       </button>
//     </div>
//   );
// }





