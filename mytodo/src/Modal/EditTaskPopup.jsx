import React,{useEffect, useState} from 'react';
import {EditTodo} from '../Api/tasks'
import {Button, Form, Modal, Spinner} from 'react-bootstrap';
import {format} from 'date-fns';
import ValidateTodos from '../Auth/ValidateTodos';

const EditTaskPopup = ({editShow, handleEditClose, todos, setTodos, setSelectedTodo, selectedTodo})=>{
     
    const [buttonLoading, setButtonLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [apierrors, setApierrors] = useState(null)
    const [task, setTask] = useState({
        title:'',
        description:'',
        date:''
  })
const updateTask =(e)=> {
      setTask({...task, [e.target.name]: e.target.value})
}
useEffect(()=>{
   setTask(selectedTodo)
},[])

const handleSubmit = async(e)=>{
      e.preventDefault()
      setErrors({})
      const todoError = ValidateTodos(task)
      if(Object.keys(todoError).length>0){
        setErrors(todoError)
        return;
      }
      setButtonLoading(true) 
      const EditedTodo = await EditTodo(task)
    
      const filtertodos = todos.filter(function(ele){
        return ele.id !== EditedTodo.id
      })

      if(EditedTodo.id){
      const newTodos=[EditedTodo, ...filtertodos]
      setTodos(newTodos)
      handleEditClose()
    
      }else{
        setApierrors(EditedTodo)
      }
      setButtonLoading(false)      
  }

    return(
        <>
        <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group>
               {apierrors && <p className="error">{apierrors}</p>}
                <Form.Label >Title</Form.Label>
                <Form.Control type="text" name="title" defaultValue={task.title} onChange={updateTask}/>
                {errors.title && <p className = "error">{errors.title}</p>}
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Label >Description</Form.Label>
                <Form.Control type="text" name="description" defaultValue={task.description} onChange={updateTask}/>
               {errors.description && <p className = "error">{errors.description}</p>}
            </Form.Group>
                <Form.Group  className="mt-4">
                <Form.Label >Date</Form.Label>
                <Form.Control type="date" name="date" 
                defaultValue={task.date?format(new Date(task.date?.split('T')[0]),'yyyy-MM-dd'):''}           
                onChange={updateTask}/> 
               {errors.date && <p className = "error">{errors.date}</p>}
            </Form.Group>
            </Form>
            </Modal.Body>
        <Modal.Footer>
        {!buttonLoading && (<Button variant="success" onClick={handleSubmit}>Update</Button>)} 
        {buttonLoading && (<Button variant="success" onClick={handleSubmit}  disabled={buttonLoading}>
            <Spinner
                    as="span"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"/>     
            Update
          </Button>)}
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default EditTaskPopup;