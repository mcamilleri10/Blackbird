import React from 'react';

const FractionalModal = () => {
  return (
    <div className='modal-content'>
      <h1>Fractional Shares Disclosure</h1>
      <p>
        {/* Fractional shares are illiquid outside of Blackbird and not 
        transferable. For a complete explanation of conditions, restrictions
        and limitations associated with fractional shares, see our Customer 
        Agreement related to fractional shares. */}
        Fractional shares are illiquid outside of Blackbird, and also inside
        of Blackbird, because the shares arn't real and the points don't matter.
        Thank you for stopping by.
      </p>
    </div>
  );
};

export default FractionalModal;