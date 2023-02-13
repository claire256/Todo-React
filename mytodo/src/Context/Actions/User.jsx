import axios from 'axios';
import {SIGNUP, SIGNUP_ERRORS, LOGIN, LOGIN_ERRORS} from '../Types.jsx';


export const AddUser = (user)=> async(dispatch)=>{
    try{
        const response = await axios.post('signup', user)
        dispatch({type: SIGNUP, payload: response.data})
    }
    catch(err){
         dispatch({type: SIGNUP_ERRORS, payload:err})
    }
}

export const LoginUser = (user)=> async(dispatch)=>{
        try{
            const response = await axios.post('/login', user)
            dispatch({type: LOGIN, payload: response.data}) 
        }
        catch(err){
            dispatch({type: LOGIN_ERRORS, payload: err})  
        }
    }
