
export const RECEIVE_COLOR = 'RECEIVE_COLOR';


export const receiveColor = color => {
  return {
    type: RECEIVE_COLOR,
    color
  };
};