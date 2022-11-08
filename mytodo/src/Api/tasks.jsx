import axios from 'axios';

export const AddTodo = async (task)=>{
    const token = localStorage.getItem('access_token')
    // console.log('hhhhh', token)
    try{
    const response = await axios.post('/todos', task, {
      headers: {"Authorization": 'Bearer '+token}
    })
    //   console.log('tttttt>>>>>', response)
      return response
    
    }catch(err){
        // console.log('eeee>>>', err.response)
        return err.response
    }
}

export const GetTodo = async ()=>{
    const token = localStorage.getItem('access_token')
    try{
        const response = await axios.get('/todos', {
            headers: {"Authorization": 'Bearer '+token}
        })
        console.log('getttt>>>>', response.data)
        return response.data
    }
    catch(err){
        return err
    }
}

export const EditTodo = async (task)=> {
    try{
        const response = await axios.put('/todos/:id', task)
        return response
    
    }
    catch(err){
        return err
    }
}