import axios from 'axios';

export const AddTodo = async (task)=>{
    const token = localStorage.getItem('access_token')
    try{
    const response = await axios.post('/todos', task, {
      headers: {"Authorization": 'Bearer '+token}
    })
      return response.data.data[0]
    
    }catch(err){
        if(err.response.status === 400){
         return err.response.data.data
        }
        else{
            return 'Something went wrong'
        }
    }
}

export const GetTodos = async ()=>{
    const token = localStorage.getItem('access_token')
    try{
        const response = await axios.get('/todos', {
            headers: {"Authorization": 'Bearer '+token}
        }) 
        console.log('res', response.data)  
        return response.data.data
    }
    catch(err){
        if(err.response.data === 400){
            console.log('error', err.response.data)
            return err.response.data
        }else{
        return 'Something went wrong'
        }
    }
}
