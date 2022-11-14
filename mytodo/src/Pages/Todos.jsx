import React,{useState} from 'react';
import {Button, Container} from 'react-bootstrap';
import CreateTask from '../Modal/CreateTask';

const Todos = ()=>{
   
    const [show, setShow] = useState(false);

    const handleClose = ()=> setShow(false); 
    const handleShow = ()=> setShow(true);
       
   return(
        <>
        <div className ="header text-center">
        <h3 className="mt-4">Todo List</h3>
        <Button className="todos mt-2" variant="success" onClick={handleShow}>Create Task</Button>
        </div>
        <div>
          <Container className="todo-cont">
          <div className="carddiv">
         </div>
         </Container>
        </div>
       
        <CreateTask show={show} handleClose={handleClose}/>
        </>
    )
}

export default Todos;