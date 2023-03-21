const ValUser = (user)=>{
   
   let errors = {}
   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
   if(!user.first_name){
      errors.first_name = "First name required"
   }
   if(!user.last_name){
       errors.last_name = "Last name required"
   }
   if(!user.email){
    errors.email= "Email required"
   
  }else if(!re.test(user.email)){
    errors.email= "Email is invalid"
   }
   if(!user.password){
    errors.password = "Password required"
   
   }else if(!user.password.length >5){
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