import axios from 'axios';

export const AddTodo = async (task)=>{
    const token = localStorage.getItem('access_token')
    try{
    const response = await axios.post('/todos', task, {
      headers: {"Authorization": 'Bearer '+token}
    })

      return response
    
    }catch(err){
        return err.response
    }
}

export const GetTodo = async ()=>{
    const token = localStorage.getItem('access_token')
    try{
        const response = await axios.get('/todos', {
            headers: {"Authorization": 'Bearer '+token}
        })
        return response.data
    }
    catch(err){
        return err
    }
}

export const EditTodo = async (task)=> {
    const token = localStorage.getItem('access_token')
    
    try{
        const response = await axios.put(`/todos/${task.id}`, task, {
            headers: {"Authorization": 'Bearer '+token}
        })
        return response.data.data   
    }
    catch(err){
        if(err.response.status === 400){
            return err.response.data.data
        }
        else{
                       
            return 'Something went wrong'
        }
    }
}

export const DeleteTodo = async(task)=>{
    
    const token = localStorage.getItem('access_token')
    try{
        const response = await axios.delete(`/todos/${task.id}`, {
     headers: {"Authorization": 'Beare '+token}       
        })
        return response.data.data
    }
    catch(err){
        if(err.response.status === 400){
         return err.response.data.data
        }
        else{
            return 'Something went wrong'
        }
    }
}