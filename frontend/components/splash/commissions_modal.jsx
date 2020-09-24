import React from 'react';

const CommissionsModal = () => {
  return (
    <div className='modal-content'>
      <h1>Commissions Disclosure</h1>
      <p>
        {/* Commission-free trading means $0 commission trades placed on 
        self-directed accounts via mobile devices or web. Keep in mind, 
        other fees may still apply. */}
        While blackbird does indeed offer commission-free trading, it is becuase 
        none of the transactions are real! But it's fun to pretend isn't it?
      </p>
    </div>
  );
};

export default CommissionsModal;