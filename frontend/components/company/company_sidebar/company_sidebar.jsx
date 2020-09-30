import React from 'react';

export default class CompanySidebar extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    const { company } = this.props;
    if (!company) return null;
    return (
      <div className='company-sidebar'>
        <div className='company-sidebar-title'>
          <h3>Buy {company.symbol}</h3>
        </div>
        <div className='share-form'>

        </div>
      </div>
    );
  }
}