const ValidateTodos = (task)=>{
    let errors = {}

    if(!task.title){
        errors.title = "title is required"
    
    }else if(task.title.length>10){
         errors.title = "title should not exceed 10 characters"
     }
    if(!task.description){
        errors.description = "description is required"
    
    }else if(task.description.length>10){
        errors.description = "description should not exceed 10 characters"
     }
    if(!task.date){
        errors.date = "date is required"
    }
    return errors
}

export default ValidateTodos;