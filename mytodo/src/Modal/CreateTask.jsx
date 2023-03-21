import React,{useState, useContext, useEffect} from 'react';
import {AddTodo} from '../Context/Actions/Task'
import {Button, Form, Modal, Spinner} from 'react-bootstrap';
import ValidateTodos from '../Auth/ValidateTodos'
import {AppContext} from '../Context/Context'
import { ADDTODO, ADDTODO_ERRORS } from '../Context/Types';

const CreateTask = ({show, handleClose, todos, setTodos})=>{
    const {todoState, todoDispatch} = useContext(AppContext)
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
  useEffect(()=>{
    if(todoState.todo?.id){
      const newTodos = [todoState.todo, ...todos]
      setTodos(newTodos)
      handleClose()
      todoDispatch({type: ADDTODO, payload: null})
   } 
   if(todoState.addtodo_errors){
     setApierrors(todoState.addtodo_errs)
     todoDispatch({type: ADDTODO_ERRORS, payload: null})
    }
  },[todoState])
  const handleSubmit = async(e)=>{
      e.preventDefault()
      setErrors({})
      const todoError = ValidateTodos(task)
      if(Object.keys(todoError).length>0){
        setErrors(todoError)
         return;
      }
      setButtonLoading(true) 
       await AddTodo(task)(todoDispatch) 
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
            <Form.Control as="textarea" name="description" onChange={updateTask}/>
            {errors.description && <p className = "error">{errors.description}</p>}
            </Form.Group>
            <Form.Group  className="mt-4">
            <Form.Label >Date</Form.Label>
            <Form.Control type="date" name="date" min={new Date().toISOString().split('T')[0]} onChange={updateTask}/> 
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