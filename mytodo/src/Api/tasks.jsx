import axios from 'axios';


export const GetTodos = async ()=>{
    const token = localStorage.getItem('access_token')
    try{
        const response = await axios.get('/todos', {
            headers: {"Authorization": 'Bearer '+token}
        })  
        return response.data.data
    }
    catch(err){
        if(err.response.data === 400){
            return err.response.data
        }else{
        return 'Something went wrong'
        }
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
    console.log('token', token)
    try{
        const response = await axios.delete(`/todos/${task.id}`, {
     headers: {"Authorization": 'Bearer '+token}       
        })
        return response.data.data
    }
    catch(err){
        if(err.response.status === 400){
            console.log('ddd', err.data.data)
         return err.response.data.data
        }
        else{
            return 'Something went wrong'
        }
    }
}