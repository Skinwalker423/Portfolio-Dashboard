import React, { createContext, useState, useContext } from "react";

export const StateContext = createContext({});

const initialState = {
    chat: false,
    chart: false,
    userProfile: false,
    notification: false,
}

export function useStateContext(){
    return useContext(StateContext);
}

export const StateProvider = ({children}) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const handleClicked = (clicked) => {
        return setIsClicked({...initialState, [clicked]: true})
    }


    const value = {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClicked}

    return(
        <StateContext.Provider value={value}>{children}</StateContext.Provider>
    )
}