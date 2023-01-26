import React, {useState, createContext, useReducer} from "react";
import UserReducer,{UserInitialState} from './Reducer/User'

export const AppContext = createContext({});

const AppContextProvider = ({children})=>{
  const [userState, userDispatch] = useReducer(UserReducer, UserInitialState )
    return(
    <AppContext.Provider value ={{userState, userDispatch}}>
      {children}
    </AppContext.Provider>
    
    )
}
export default AppContextProvider;