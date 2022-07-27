import { createContext, useReducer } from "react";
import { themeReducer } from "./Reducer/Theme.reducer";
import * as ActionTypes from './ActionTypes'

const initval = {
    theme:'light'
}

const ThemeContex = createContext();



export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initval)

    const toogle_theme = (theme) => {
        console.log(theme);

        const newtheme = theme === 'light' ? 'dark' : 'light';
        dispatch({ type: ActionTypes.TOOGLE_THEME, payload: newtheme })
    }

    return (
        <ThemeContex.Provider
            value={{
                ...state,
                toogle_theme
            }}
        >
            {children}
        </ThemeContex.Provider>
    )

}

export default ThemeContex