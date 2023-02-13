import React, {createContext, useReducer} from 'react';
import UserReducer, {UserInitialState} from './Reducer/User';
import TaskReducer, {TodoInitialState} from './Reducer/Task';

export const AppContext = createContext({})
const AppContextProvider =({children})=>{ 
    const[userState, userDispatch] = useReducer(UserReducer, UserInitialState)
    const [todoState, todoDispatch] = useReducer(TaskReducer, TodoInitialState)
    return(
    <AppContext.Provider value ={{userState, userDispatch, todoState, todoDispatch}}>
       {children}
    </AppContext.Provider>
    )
}

export default AppContextProvider
