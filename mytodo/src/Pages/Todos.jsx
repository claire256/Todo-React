import React,{useState} from 'react';
import {Button, Container} from 'react-bootstrap';
import CreateTask from '../Modal/CreateTask'
import Kard from '../Components/Kard'

const data = [
  {
    activity: "travel",
    description: "travel to mombasa",
    date: "2022-07-11"
},

 {
   activity: "travel",
   description: "travel to mombasa",
   date: "2022-07-11"
}, 
 {
    activity: "travel",
    description: "travel to mombasa",
    date: "2022-07-11"
}, 
  {
    activity: "travel",
    description: "travel to mombasa",
    date: "2022-07-11"
}, 
  {
    activity: "travel",
    description: "travel to mombasa",
    date: "2022-07-11"
},
{
    activity: "travel",
    description: "travel to mombasa",
    date: "2022-07-11"
}
]

const Todos = ()=>{
   
    const [show, setShow] = useState(false);
    // Store all tasks user has created
    const [taskList, setTaskList] = useState([]);

    const handleClose = ()=> setShow(false); 
    const handleShow = ()=> setShow(true)

    // save task user has created
     const saveTask = (taskObj)=>{
         const tempList = taskList
         tempList.push(taskObj)
        setTaskList(tempList)
         setShow(false)
     }
       
   return(
        <>
        <div className ="header text-center">
        <h3 className="mt-4">Todo List</h3>
        <Button className="todos mt-2" variant="success" onClick={handleShow}>Create Task</Button>
        </div>
        <div>
          <Container className="todo-cont">
            <div className="carddiv">
         {taskList.map((obj)=><Kard />)}         
         {data.map((item)=> <Kard activity={item.activity} description={item.description} date={item.date} />)}
         </div>
         </Container>
        </div>
       
        <CreateTask show={show} handleClose={handleClose} save={saveTask}/>
        </>
    )
}

export default Todos;