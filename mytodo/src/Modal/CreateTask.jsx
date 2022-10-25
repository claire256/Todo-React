import React,{useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';


const CreateTask = ({show, handleClose, save})=>{

    const [task, setTask] = useState({
        activity:'',
        description:'',
        date:''
  })
  const updateTask =(e)=> {
      setTask({...task, [e.target.name]: e.target.value})
}
  const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(task)    
  }
  const handleSave = ()=>{
    let taskObj = {}
    taskObj["Activity"] = task.activity
    taskObj["Description"]= task.description
    taskObj["Date"]= task.date
      save(taskObj)
 }
    return(
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label >Activity</Form.Label>
                <Form.Control type="text" name="activity" onChange={updateTask}/>
            </Form.Group>
            <Form.Group className="mt-2">
            <Form.Label >Description</Form.Label>
            <Form.Control type="text" name="description" onChange={updateTask} style={{height:'100px'}}/>
            </Form.Group>
            <Form.Group  className="mt-2">
            <Form.Label >Date</Form.Label>
            <Form.Control type="text" name="date" onChange={updateTask}/>
            </Form.Group>
            </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSave}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default CreateTask;