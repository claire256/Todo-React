import axios from 'axios';

export const AddUser = async (user)=>{
    try{
    const response = await axios.post('/signup', user)
     return response

    }
    catch(err){       
        return err.response.data
    }
}

export const LoginUser = async (user)=>{
    try{
        const response = await axios.post('/login', user)
        return response.data
    }

    catch(err){
        return err
    }
    
}


