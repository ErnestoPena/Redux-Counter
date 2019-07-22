import { INCREMENT, DECREMENT } from '../actions';

//Reducer is were We set our initial state and it is also where our state gets updated based in the action We are triggerin. 


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
