export const formatStat = num => {
  if (num) {
    const numArr = num.toString().split('');
    const length = numArr.length;
    let newNum;
    if (length > 12) {
      newNum = numArr.slice(0, length - 10);
      newNum.splice(length - 12, 0, '.');
      newNum.push('T');
      return newNum.join('');
    } else if (length > 9) {
      newNum = numArr.slice(0, length - 7);
      newNum.splice(length - 9, 0, '.');
      newNum.push('B');
      return newNum.join('');
    } else if (length > 6) {
      newNum = numArr.slice(0, length - 4);
      newNum.splice(length - 6, 0, '.');
      newNum.push('M');
      return newNum.join('');
    } else if (length > 3) {
      numArr.splice(length - 3, 0, ',');
      return numArr.join('');
    } else {
      return num;
    }
  }
};