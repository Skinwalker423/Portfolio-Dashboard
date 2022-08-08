import React, { createContext, useState, useContext, useEffect } from "react";

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
    const [screenSize, setScreenSize] = useState(undefined);


    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleClicked = (clicked) => {
        return setIsClicked({...initialState, [clicked]: true})
    }


    const value = {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClicked, screenSize}

    return(
        <StateContext.Provider value={value}>{children}</StateContext.Provider>
    )
}