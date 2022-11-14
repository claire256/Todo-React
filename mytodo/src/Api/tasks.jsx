import axios from 'axios';

export const AddTodo = async (task)=>{
    const token = localStorage.getItem('access_token')
    console.log('hhhhh', token)
    try{
    const response = await axios.post('/todos', task, {
      headers: {"Authorization": 'Bearer '+token}
    })
      return response.data.data[0]
    
    }catch(err){
        if(err.response.status === 400){
        console.log('eeee>>>', err.response.data.data)
         return err.response.data.data
        }
        else{
            return 'Something went wrong'
        }
    }
}
