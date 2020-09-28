import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceArea
} from 'recharts';
import CustomTooltip from './custom_tooltip';

export default class DashboardChart extends React.Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    const { data, dayChange } = this.props;
    let color;
    if (dayChange >= 0) {
      color = '#32cd32';
    } else {
      color = '#ff0000';
    }
    // debugger
    return (
      <LineChart width={675} height={350} data={data}
        margin={{top: 5, right: 5, bottom: 5, left: 5}} className='line-chart'>
        <XAxis hide={true} />
        <YAxis hide={true} type='number' domain={[0, 78]}/>
        <Tooltip content={<CustomTooltip />} />
        <Line type="linear" dataKey="price" stroke={color} dot={false}
          strokeWidth={2}
        /> 
      </LineChart>
  
    );
  }

}


