import axios from 'axios';

export const AddTodo = async (task)=>{
    const token = localStorage.getItem('access_token')
    console.log('hhhhh', token)
    try{
    const response = await axios.post('/todos', task, {
      headers: {"Authorization": 'Bearer '+token}
    })
      console.log('tttttt>>>>>', response)
      return response
    
    }catch(err){
        console.log('eeee>>>', err.response)
        return err.response
    }
}
