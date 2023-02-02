import axios from 'axios';
import { ADDTODO, ADDTODO_ERRORS } from '../Types';

export const AddTodo =  (task) => async (dispatch)=>{
    const token = localStorage.getItem('access_token')
    try{
    const response = await axios.post('/todos', task, {
      headers: {"Authorization": 'Bearer '+token}
    })
      dispatch({type: ADDTODO, payload: response.data})
    
    }catch(err){
        dispatch({type: ADDTODO_ERRORS, payload:err})
    }
}