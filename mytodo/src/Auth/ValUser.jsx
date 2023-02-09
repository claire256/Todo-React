const ValUser = (user)=>{
   let errors = {}
    
   if(!user.first_name){
      errors.first_name = "First name required"
   }
   if(!user.last_name){
       errors.last_name = "Last name required"
   }
   if(!user.email){
    errors.email= "Email required"
   
  }else if(!/\s+@\s+\.\s+/.test(user.email)){
    errors.email= "Email is invalid"
   }
   if(!user.password){
    errors.password = "Password required"
   
   }else if(!user.password.length< 5){
      errors.password ="Password must be more than 5 characters "
   }
   if(!user.confirm_password){
    errors.confirm_password = "Password required"
   
  }else if(user.confirm_password !== user.password){
    errors.confirm_password = "Passwords do not match"
   }

   return errors;
};

export default ValUser;