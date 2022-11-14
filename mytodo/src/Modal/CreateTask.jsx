import React,{useState} from 'react';
import {AddTodo} from '../Api/tasks'
import {Button, Form, Modal, Spinner} from 'react-bootstrap';
import ValidateTodos from '../Auth/ValidateTodos'
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const CreateTask = ({show, handleClose})=>{
  //  const [selectedDate, setSelectedDate] = useState(new Date());
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
      setButtonLoading(true) 
      const todoError = ValidateTodos(task)
      if(Object.keys(todoError).length>0){
        setErrors(todoError)
        setButtonLoading(false)
         return;
      }
      const AddedTodo = await AddTodo(task)  
      console.log('dddddd', AddedTodo)
      if(AddedTodo.id){
         handleClose()
         setButtonLoading(false)
     } 
      else{
        console.log('bbbbbbb>>', apierrors)
         setApierrors(AddedTodo)
         setButtonLoading(false)
      }
        
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
            {/* <DatePicker 
            selected ={selectedDate} 
            onChange={(date)=> setSelectedDate(date)} 
            minDate = {new Date()}/> */}
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