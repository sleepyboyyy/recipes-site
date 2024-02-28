import {createContext, useReducer} from "react";

export const ThemeContext = createContext(null)

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, color: action.payload}
        case 'CHANGE_MODE':
            return {...state, mode: action.payload}
        default:
            return state;
    }
}

export function ThemeProvider({children}) {
    const initialState = {
        color: 'rebeccapurple',
        mode: 'dark'
    }
    const [state, dispatch] = useReducer(themeReducer, initialState)

    const changeColor = (color) => {
        dispatch({type: 'CHANGE_COLOR', payload: color})
    }

    const changeMode = (mode) => {
        dispatch({type: 'CHANGE_MODE', payload: mode});
    }

    return (
        <ThemeContext.Provider  value={{...state, changeColor, changeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}
