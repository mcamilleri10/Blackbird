
export const formatDateStr = (dateStr) => {
  const months = ['Jan ', 'Feb ', 'Mar ', 'Apr ', 'May ', 'Jun ', 'Jul ',
    'Aug ', 'Sep ', 'Oct ', 'Nov ', 'Dec '
  ];
  let result = '';
  const split = dateStr.split(',');
  const monthNum = parseInt(split[0].split('-')[1]);
  result += months[monthNum - 1] + split[0].split('-')[2];
  if (typeof split[1] === 'undefined') {
    return result;
  } else {
    let hour = split[1].split(':')[0];
    const minute = split[1].split(':')[1];
    if (hour > 12) hour -= 12;
    result += `, ${hour}:${minute}`;
    if (hour === 12 || hour < 7) {
      result += ' PM';
    } else {
      result += ' AM';
    }
  }
  return result;
};