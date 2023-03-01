import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import CreateTask from "../Modal/CreateTask";
import Kard from "../Components/Kard";
import { DeleteTodo, GetTodos } from "../Api/tasks";
import EditTaskPopup from "../Modal/EditTaskPopup";
import DeleteTaskPopup from "../Modal/DeleteTaskPopup";

const Todos = () => {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [delshow, setDelShow] = useState(false);
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [apierrors, setApierrors] = useState(null);

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
};

export default Todos;
