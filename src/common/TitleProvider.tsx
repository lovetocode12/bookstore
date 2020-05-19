import React, { useReducer } from 'react'
import { TitleContext } from './TitleContext'

type actionType = {
    type: string,
    payload: string
}
export const titleReducer = (state: string, action: actionType) => {
    switch (action.type) {
        case 'SET_TITLE':
            return action.payload;
        default:
            return state;
    }
};

const initialTitle = '';

const TitleProvider:React.FC<any> = ({ children }) => {

    const [title, dispatchTitle] = useReducer(titleReducer, initialTitle);
    return (
        <TitleContext.Provider value={{title, dispatchTitle}} >
            {children}
        </TitleContext.Provider>
    )
}

export default TitleProvider

