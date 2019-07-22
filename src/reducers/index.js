import { INCREMENT, DECREMENT } from '../actions';

//Reducer is were We set our initial state and it is also where our state gets updated based in the action We are triggerin.
//In the example from codesandbox it is showing the decrement as 
// count: state.count - action.payload. This will result is adding to the counter since - + - = + 


const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload
      }
    case DECREMENT:
      return {
        count: state.count + action.payload
      }
      
    default:
      return state;
  }
};
