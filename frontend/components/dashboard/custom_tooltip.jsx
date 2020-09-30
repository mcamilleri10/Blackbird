import React from 'react';

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    // debugger
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">
          {Boolean(payload) ? (
            `${payload[0].payload['date/time']}  -  $${payload[0].value.toFixed(2)}`
          ) : (
            null
          )};
        </p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;

