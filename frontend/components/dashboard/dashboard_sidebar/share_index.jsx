import React from 'react';

export default class ShareIndex extends React.Component {

  constructor(props) {
    super(props);

  }



  render() {
    const { shares, quotes } = this.props;
    debugger
    return (
      <div className='share-index'>
        <div className='share-index-title'>
          <h3>Stocks</h3>
          <button className='share-index-dd'>
            ...
          </button>
        </div>
        <div>
          <ul>
            {/* {shares.forEach(share => {
              debugger
            })} */}
          </ul>
        </div>
      </div>
    );
  }

}