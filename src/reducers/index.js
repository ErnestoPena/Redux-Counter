import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
    case DECREMENT:
    // Fill in the body of this case
    default:
      return state;
  }
};
