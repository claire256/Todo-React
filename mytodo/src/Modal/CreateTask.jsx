import React,{useState} from 'react';
import {AddTodo} from '../Api/tasks'
import {Button, Form, Modal, Spinner} from 'react-bootstrap';
import ValidateTodos from '../Auth/ValidateTodos'


const CreateTask = ({show, handleClose, todos, setTodos})=>{
    const [buttonLoading, setButtonLoading] = useState(false)
    const [apierrors, setApierrors] = useState(null)
    const [errors, setErrors] = useState({})
    const [task, setTask] = useState({
        title:'',
        description:'',
        date:''
  })
  const updateTask =(e)=> {
      setTask({...task, [e.target.name]: e.target.value})
}
  const handleSubmit = async(e)=>{
      e.preventDefault()
      setErrors({})
      const todoError = ValidateTodos(task)
      if(Object.keys(todoError).length>0){
        setErrors(todoError)
         return;
      }
      setButtonLoading(true) 
      const AddedTodo = await AddTodo(task)  
      if(AddedTodo.id){
        const newTodos = [AddedTodo, ...todos]
        setTodos(newTodos)
         handleClose()
     } 
      else{
         setApierrors(AddedTodo)
      
      }
      setButtonLoading(false)      
    }

    return(
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group>
               {apierrors && <p className ="error">{apierrors}</p>}
                <Form.Label >Title</Form.Label>
                <Form.Control type="text" name="title" onChange={updateTask}/>
                {errors.title && <p className = "error">{errors.title}</p>}
            </Form.Group>
            <Form.Group className="mt-2">
            <Form.Label >Description</Form.Label>
            <Form.Control type="text" name="description" onChange={updateTask}/>
            {errors.description && <p className = "error">{errors.description}</p>}
            </Form.Group>
            <Form.Group  className="mt-4">
            <Form.Label >Date</Form.Label>
            <Form.Control type="date" name="date" onChange={updateTask}/>  
            {errors.date && <p className = "error">{errors.date}</p>}
            </Form.Group>
            </Form>
            </Modal.Body>
        <Modal.Footer>
        {!buttonLoading && (<Button variant="success" onClick={handleSubmit}>Add task</Button>)} 
        {buttonLoading && (<Button variant="success" onClick={handleSubmit}  disabled={buttonLoading}>
            <Spinner
                    as="span"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"/>     
            Add task
          </Button>)}
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default CreateTask;