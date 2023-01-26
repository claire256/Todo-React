import axios from 'axios';

export const AddUser = async (user)=>{
    try{
    const response = await axios.post('/signup', user)
    return response.data.data
    }
    catch(err){  
        if(err.response.status === 400) {  
        return err.response.data.data
        }
        else{
            return 'Something went wrong'
        }
    }
}

// export const LoginUser = async (user)=>{
//     try{
//         const response = await axios.post('/login', user)
//         return response.data
//     }
//     catch(err){
//         if(err.response.status === 400){
//             return err.response.data
//         }
//         else{
//             return 'Something went wrong'
//         }
//     }
    
// }


