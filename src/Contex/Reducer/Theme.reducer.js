import * as ActionTypes from '../ActionTypes'

export const themeReducer = (state, action) => {
    console.log(action.type, action.paylod);
    switch (action.type) {
        case ActionTypes.TOOGLE_THEME:
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;

    }
}