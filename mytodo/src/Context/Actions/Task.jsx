import axios from 'axios';
import { ADDTODO, ADDTODO_ERRORS } from '../Types';

export const AddTodo =  (task) => async (dispatch)=>{
    const token = localStorage.getItem('access_token')
    try{
    const response = await axios.post('/todos', task, {
      headers: {"Authorization": 'Bearer '+token}
    })
      console.log('res', response.data.data[0])
      dispatch({type: ADDTODO, payload: response.data.data[0]})
    }
    catch(err){
        dispatch({type: ADDTODO_ERRORS, payload:err.data})
    }
}