import axios from 'axios';

export const LoginUser = async (user)=>{
    try{
        const response = await axios.post('/login', user)
        return response.data
    }
    catch(err){
        if(err.response.status === 400){
            return err.response.data
        }
        else{
            return 'Something went wrong'
        }
    }
    
}


