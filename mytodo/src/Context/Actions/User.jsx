import axios from 'axios';
import {SIGNUP, SIGNUP_ERRORS} from '../Types.jsx';


export const AddUser = (user)=> async(dispatch)=>{
    try{
        const response = await axios.post('signup', user)
        dispatch({type: SIGNUP, payload: response.data})
    }
    catch(err){
         dispatch({type: SIGNUP_ERRORS, payload:err})
    }
}