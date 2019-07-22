export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


//We are exporting this two functions to the reducer to use them in within the switch statement 
//This functions hold the "Action" to be passed to the reducer with the "type and the payload which is used to update our data"
export const increment = () => {
  return {
    type: INCREMENT,
    payload: 1
  }
};

export const decrement = () => {
  return {
    type: DECREMENT,
    payload: -1
  }
};
