import React,{useState} from 'react';
import {AddTodo} from '../Api/tasks'
import {Button, Form, Modal} from 'react-bootstrap';


const CreateTask = ({show, handleClose})=>{

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
      const AddedTodo = await AddTodo(task)  
      console.log('Addeddd', AddedTodo) 
      handleClose()
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
                <Form.Label >Title</Form.Label>
                <Form.Control type="text" name="title" onChange={updateTask}/>
            </Form.Group>
            <Form.Group className="mt-2">
            <Form.Label >Description</Form.Label>
            <Form.Control type="text" name="description" onChange={updateTask}/>
            </Form.Group>
            <Form.Group  className="mt-4">
            <Form.Label >Date</Form.Label>
            <Form.Control type="date" name="date" onChange={updateTask}/> 
            </Form.Group>
            </Form>
            </Modal.Body>
        <Modal.Footer>

            <Button variant="success"  onClick={handleSubmit}>
            Add task
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default CreateTask;