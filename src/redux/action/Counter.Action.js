import * as ActionTypes from "../ActionType";

export const incrementCounter = () => (dispatch) => {
  dispatch({type:ActionTypes.INCREMENT_COUNTER});
};
export const decrementCounter = () => (dispatch) => {
  dispatch({type:ActionTypes.DECREMENT_COUNTER});
};
