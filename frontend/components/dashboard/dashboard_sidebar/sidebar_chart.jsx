import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import CustomTooltip from '../custom_tooltip';

export default class SidebarChart extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const { dayChange, data, loading } = this.props;
    const spinner = <FontAwesomeIcon icon={faSpinner} className='spinner' spin />;
    let color;

    if (loading) {
      // debugger
      return <div>{spinner}</div>;
    }

    if (dayChange >= 0) {
      color = '#32cd32';
    } else {
      color = '#ff0000';
    }
    // debugger
    return (
      <LineChart width={75} height={35} data={data}
        margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
        <XAxis hide={true} />
        <YAxis 
          hide={true} 
          type='number' 
          domain={['dataMin - 10', 'dataMax + 10 ']}
        />
        {/* <Tooltip content={<CustomTooltip />} /> */}
        <Line type="monotone" dataKey="price" stroke={color} dot={false}
          strokeWidth={1}
        />
      </LineChart>

    );
  }

}


