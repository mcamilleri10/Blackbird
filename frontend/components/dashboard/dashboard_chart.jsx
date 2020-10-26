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
    const { data, dayChange, availableFunds } = this.props;
    let color;
    if (dayChange >= 0) {
      color = '#32cd32';
    } else {
      color = '#ff0000';
    }
    return (
      <LineChart width={675} height={350} data={data}
        margin={{top: 5, right: 5, bottom: 5, left: 5}} className='line-chart'>
        <XAxis hide={true} doman={[0, 78]}/>
        <YAxis hide={true} type='number' domain={['auto', 'auto']}/>
        <Tooltip content={<CustomTooltip availableFunds={availableFunds} />} position={{ y: -20 }} isAnimationActive={false} offset={-60}/>
        <Line type="linear" dataKey="price" stroke={color} dot={false}
          strokeWidth={2}
        /> 
      </LineChart>
  
    );
  }

}


