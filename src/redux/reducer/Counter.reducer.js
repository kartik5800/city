import * as ACtionTypes from "../ActionType";
const initialState = {
  counter: 0,
};
export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACtionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
      case ACtionTypes.DECREMENT_COUNTER:
        return {
          ...state,
          counter: state.counter -1 ,
        };
        default: 
        return state;
    }
  }