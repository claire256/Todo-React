import axios from 'axios';
import {LOGIN, LOGIN_ERRORS} from '../Types';

export const LoginUser = (user)=> async(dispatch)=>{
        try{
            const response = await axios.post('/login', user)
            dispatch({type: LOGIN, payload: response.data}) 
        }
        catch(err){
            dispatch({type: LOGIN_ERRORS, payload: err})  
        }
    }
