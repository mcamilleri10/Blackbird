import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import CustomTooltip from './custom_tooltip';

export default class DashboardChart extends React.Component {

  constructor(props) {
    super(props);
    
  }


  


  render() {
    const { dayChange } = this.props;
    let color;
    if (dayChange >= 0) {
      color = '#32cd32';
    } else {
      color = '#ff0000';
    }

    // debugger
    return (
      <LineChart width={675} height={350} data={this.props.data}
        margin={{top: 5, right: 5, bottom: 5, left: 5}} className='line-chart'>
        <XAxis hide={true} />
        <YAxis hide={true} type='number' domain={['auto', 'auto']}/>
        <Tooltip content={<CustomTooltip />} />
        <Line type="linear" dataKey="price" stroke={color} dot={false}
          strokeWidth={2}
        />     
      </LineChart>
  
    );
  }

}


// import React, { PureComponent } from 'react';
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
// } from 'recharts';

// const data = [
//   {
//     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//   },
//   {
//     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//   },
//   {
//     name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//   },
//   {
//     name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//   },
//   {
//     name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//   },
//   {
//     name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//   },
//   {
//     name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//   },
// ];

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

//   render() {
//     return (
//       <LineChart
//         width={500}
//         height={300}
//         data={data}
//         margin={{
//           top: 5, right: 30, left: 20, bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//       </LineChart>
//     );
//   }
// }
