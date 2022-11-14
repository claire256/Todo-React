import React,{useState, useEffect} from 'react';
import {Button, Container} from 'react-bootstrap';
import CreateTask from '../Modal/CreateTask'
import Kard from '../Components/Kard'
import {GetTodo} from '../Api/tasks'

const Todos = ()=>{
   
    const [show, setShow] = useState(false);
    // Store all tasks user has created
     const [todos, setTodos] = useState([]);

    const handleClose = ()=> setShow(false); 
    const handleShow = ()=> setShow(true)

    // save task user has created
    //  const saveTask = (taskObj)=>{
    //      const tempList = taskList
    //      tempList.push(taskObj)
    //     setTaskList(tempList)
    //      setShow(false)
    //  }
     useEffect(()=>{
      const fetchData = async()=>{
        const task = await GetTodo()
      console.log('dddd', task)
        setTodos(task.data)
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
           {todos.map((data)=> <Kard title={data.title} description={data.description} date={data.date} />)}
         </div>
         </Container>
        </div>
       
      {show &&<CreateTask show={show} handleClose={handleClose}/>}
        </>
    )
}                                                                                                                                                                                                                                                                                                                                                                                                                              

export default Todos;