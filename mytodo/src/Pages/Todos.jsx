import React,{useState, useEffect} from 'react';
import {Button, Container} from 'react-bootstrap';
import CreateTask from '../Modal/CreateTask'
import Kard from '../Components/Kard'
import {GetTodos} from '../Api/tasks'

const Todos = ()=>{
   
    const [show, setShow] = useState(false);
     const [todos, setTodos] = useState([]);

    const handleClose = ()=> setShow(false); 
    const handleShow = ()=> setShow(true)

     useEffect(()=>{
      const fetchData = async()=>{
      const tasks = await GetTodos()
        setTodos(tasks)
      }
      fetchData() 
    
    }, [])

       
   return(
        <>
        <div className ="header text-center">
        <h3 className="mt-4">Todo List</h3>
        <Button className="todos mt-2" variant="success" onClick={handleShow}>Create Task</Button>
        </div>
        <div>
          <Container className="todo-cont">
            <div className="carddiv">
           {todos.map((data)=> <Kard todo={data} />)}
         </div>
         </Container>
        </div>
       
      {show &&<CreateTask show={show} handleClose={handleClose} todos={todos} setTodos={setTodos}/>}
        </>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                              

export default Todos;