import React,{useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';



const Todos = ()=>{
   
    const [show, setShow] = useState(false);
    // const [taskList, setTaskList] = useState('')

    const handleClose = ()=> setShow(false); 
    const handleShow = ()=> setShow(true)

    // const saveTask = (taskObj)=>{
    //     const tempList = taskList
    //     tempList.push(taskObj)
    //     setTaskList(tempList)

    // }
    
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

   
    // const handleSave = ()=>{
    //     let taskObj = {}
    //     taskObj["Activity"] = task.activity
    //     taskObj["Description"]= task.description
    //     taskObj["Date"]= task.date
    //     saveTask(taskObj)
// }

   return(
        <>
        <div className ="header text-center">
        <h3 className="mt-4">Todo List</h3>
        <Button className="todos mt-2" variant="success" onClick={handleShow}>Create Task</Button>
        </div>
        <div>
           {/* {taskList.map((Obj)=><li>{Obj.Activity}</li>)} */}
        </div>
       
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
          <Button variant="success" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
        </>
        
    )
}

export default Todos;