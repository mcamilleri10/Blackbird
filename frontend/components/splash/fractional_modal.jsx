import React from 'react';
import { Link } from 'react-router-dom';

const FractionalModal = () => {
  return (
    <div>
      <Link to='/'>X</Link>
      <h1>Fractional Shares Disclosure</h1>
      <p>
        Fractional shares are illiquid outside of Robinhood and not 
        transferable. For a complete explanation of conditions, restrictions
        and limitations associated with fractional shares, see our Customer 
        Agreement related to fractional shares.
      </p>
    </div>
  );
};

export default FractionalModal;