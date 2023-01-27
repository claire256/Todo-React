import { SIGNUP, SIGNUP_ERRORS} from '../Types.jsx';

export const UserInitialState = {}
const UserReducer = (state, action)=>{
 
    switch (action.type) {

        case SIGNUP:
            return{...state, signup: action.payload, signup_errors: null}
            
        case SIGNUP_ERRORS:
                return{...state, signup_errors: action.payload, signup: null}
        
        default:
            return state
        
      }

      
}

export default UserReducer;