import React,{useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';



const Todos = ()=>{
   
    const [show, setShow] = useState(false);

    const handleClose = ()=> setShow(false); 
    const handleShow = ()=> setShow(true)

    const [task, setTask] = useState({
        activity:'',
        description:'',
        date:''
    })
    const updateTask =(e)=> {
        setTask({...task, [e.target.name]: e.target.value})
    }
    const addTask=(e)=>{   
        e.preventDefault();
        console.log(task)
    }
    
    return(
        <>
        <div className ="header text-center">
        <h3 className="mt-4">Todo List</h3>
        <Button className="todos mt-2" variant="success" onClick={handleShow}>Create Task</Button>
        </div>
        <div></div>
       
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
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
          <Button variant="primary" type="submit" onClick={addTask}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
        </>
        
    )
}

export default Todos;