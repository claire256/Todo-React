import { SIGNUP, SIGNUP_ERRORS, LOGIN, LOGIN_ERRORS} from '../Types.jsx';

export const UserInitialState = {}
const UserReducer = (state, action)=>{
 
    switch (action.type) {

        case SIGNUP:
            return{...state, signup: action.payload, signup_errors: null}
            
        case SIGNUP_ERRORS:
                return{...state, signup_errors: action.payload, signup: null}
        case LOGIN:  
            return{...state, login: action.payload, login_err: null}
        
        case LOGIN_ERRORS:
            return{...state, login_err: action.payload, login: null}
        
        default:
            return state
        
      }

      
}

export default UserReducer;