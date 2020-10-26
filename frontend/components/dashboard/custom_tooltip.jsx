import React from 'react';

const CustomTooltip = ({ active, payload, availableFunds, asset }) => {
  if (active) {
    if (asset === 'true') {
      availableFunds = 0;
    }
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">
          {Boolean(payload) ? (
            `${payload[0].payload['date/time']}  -  $${(payload[0].value + availableFunds).toFixed(2)}`
          ) : (
            null
          )}
        </p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;

