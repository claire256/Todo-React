import React,{useState, useEffect} from 'react';
import {Button, Container} from 'react-bootstrap';
import CreateTask from '../Modal/CreateTask'
import Kard from '../Components/Kard'
import {GetTodos} from '../Api/tasks'
import EditTaskPopup from '../Modal/EditTaskPopup';

const Todos = ()=>{
   
    const [show, setShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [todos, setTodos] = useState([]);
    const [selectedTodo, setSelectedTodo] = useState({})

    const handleClose = ()=> setShow(false); 
    const handleShow = ()=> setShow(true)
    
    const handleEditClose = ()=> setEditShow(false);
     
    const openEdit = (todo)=>{
          setSelectedTodo(todo)
          setEditShow(true)
    }

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
       
        {show && <CreateTask show={show} handleClose={handleClose}/>}
        {editShow && <EditTaskPopup editShow={editShow} handleEditClose={handleEditClose}
         todos={todos} setTodos={setTodos} setSelectedTodo={setSelectedTodo} selectedTodo={selectedTodo}/>}
        </>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                              

export default Todos;