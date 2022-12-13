import axios from 'axios';
import jwt_decode from 'jwt-decode';

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
export const GetUser = async()=>{
    const token = localStorage.getItem('access_token')
    const decoded = jwt_decode(token) 
    const id = decoded.id
    console.log('uuuu', id)
    try{
        const response = await axios.get(`/users/${id}`,{
            headers: {Authorization: 'Bearer '+token}
        })
        console.log('ppp', response.data.data)
        return response.data
    }
    catch(err){
        console.log('err', err.response.data)
        if(err.response.data === 400){
            return err.response.data
        }
        else{
        return 'Something went wrong'
        }
    }
    
}


