import {LOGIN, LOGIN_ERRORS} from '../Types';

export const UserInitialState = {}
const UserReducer = (state, action)=>{
 
    switch (action.type) {
        case LOGIN:  
            return{...state, login: action.payload, login_err: null}
        
        case LOGIN_ERRORS:
            return{...state, login_err: action.payload, login: null}
        
        default:
            return state
        
      }

      
}

export default UserReducer;