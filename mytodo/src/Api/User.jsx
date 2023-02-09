import axios from 'axios';
import jwt_decode from 'jwt-decode';

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
export const GetUser = async()=>{
    const token = localStorage.getItem('access_token')
    const decoded = jwt_decode(token) 
    const id = decoded.id
    try{
        const response = await axios.get(`/users/${id}`,{
            headers: {Authorization: 'Bearer '+token}
        })
        return response.data.data
    }
    catch(err){
        if(err.response.data === 400){
            return err.response.data
        }
        else{
        return 'Something went wrong'
        }
    }    
}
export const EditUser = async(user)=>{
    const token = localStorage.getItem('access_token')
    const decode = jwt_decode(token)
    const id = decode.id
    try{
        const response = await axios.put(`/users/${id}`, user, {
            headers: {Authorization: 'Bearer '+token}
        })
        return response.data.data
    }
    catch(err){
        if(err.response.data === 400){
            return err.response.data.data
        }
        else{
            return 'Something went wrong'
        }
    }
}


