import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import CreateTask from "../Modal/CreateTask";
import Kard from "../Components/Kard";
import { DeleteTodo, GetTodos, EditTodo } from "../Api/tasks";
import EditTaskPopup from "../Modal/EditTaskPopup";
import DeleteTaskPopup from "../Modal/DeleteTaskPopup";
import ValidateTodos from "../Auth/ValidateTodos";


const Todos = () => {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [delshow, setDelShow] = useState(false);
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [apierrors, setApierrors] = useState(null);
  const [errors, setErrors] = useState({})
  const [buttonLoading, setButtonLoading] = useState(false)
//   const [task, setTask] = useState({
//     title:'',
//     description:'',
//     date:''
// })
// const updateTask =(e)=> {
//   setTask({...task, [e.target.name]: e.target.value})
// }

// useEffect(()=>{
//       setTask(selectedTodo)
//    },[])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelClose = () => setDelShow(false);

  const handleEditClose = () => setEditShow(false);

  const openEdit = (todo) => {
    setSelectedTodo(todo);
    setEditShow(true);
  };
  const openDelete = (todo) => {
    setSelectedTodo(todo);
    setDelShow(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      const tasks = await GetTodos();
      setTodos(tasks);
    };
    fetchData();
  }, []);

  const handleDelete = async (e) => {
    const deletedTodo = await DeleteTodo(selectedTodo);
    if (deletedTodo.id) {
      const filtertodos = todos.filter(function (ele) {
        return ele.id !== deletedTodo.id;
      });
      handleDelClose();
      return setTodos(filtertodos);
    } else {
      return setApierrors(deletedTodo);
    }
  };
  const handleEdit = async(e)=>{
          e.preventDefault()
          setErrors({})
          const todoError = ValidateTodos(selectedTodo)
          if(Object.keys(todoError).length>0){
            setErrors(todoError)
            return;
          }
          setButtonLoading(true) 
          const EditedTodo = await EditTodo(selectedTodo)
          console.log('todos', EditedTodo)
          const filtertodos = todos.filter(function(ele){
            return ele.id !== EditedTodo.id
          })
    
          if(EditedTodo.id){
          const newTodos=[EditedTodo, ...filtertodos]
          setTodos(newTodos)
          handleEditClose()
        
          }else{
            setApierrors(EditedTodo)
          }
        setButtonLoading(false) 
        }     
    
  return (
    <>
      <div className="header text-center">
        <h3 className="mt-4">Todo List</h3>
        <Button className="todos mt-2" variant="success" onClick={handleShow}>
          Create Task
        </Button>
      </div>
      <div>
        <Container className="todo-cont">
          {apierrors && <p className="error">{apierrors}</p>}
          <div className="carddiv">
            {todos.map((data) => {
              return (
                <Kard
                  todo={data}
                  editShow={editShow}
                  setEditShow={setEditShow}
                  openEdit={openEdit}
                  openDelete={openDelete}
                />
              );
            })}
          </div>
        </Container>
      </div>

      {show && (
        <CreateTask
          show={show}
          handleClose={handleClose}
          todos={todos}
          setTodos={setTodos}
        />
      )}
      {editShow && (
        <EditTaskPopup
          handleEdit={handleEdit}
          editShow={editShow}
          handleEditClose={handleEditClose}
          todos={todos}
          setTodos={setTodos}
          setSelectedTodo={setSelectedTodo}
          selectedTodo={selectedTodo}
        />
      )}
      {delshow && (
        <DeleteTaskPopup
          handleDelete={handleDelete}
          delshow={delshow}
          handleDelClose={handleDelClose}
        />
      )}
    </>
  );
}

export default Todos;
