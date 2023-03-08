import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Kard from "../Components/Kard";
import { DeleteTodo, GetTodos } from "../Api/tasks";
import { format, isAfter } from "date-fns";
import DeleteTaskPopup from "../Modal/DeleteTaskPopup";

const Home = () => {
  const [todayTodos, setTodayTodos] = useState([]);
  const [upcomingTodos, setUpcomingTodos] = useState([]);
  const [apierrors, setApierrors] = useState(null);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [delshow, setDelShow] = useState(false);
  const [showtodo, setShowtodo] = useState(null);

  const handleDelClose = () => setDelShow(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedtodos = await GetTodos();
      if (fetchedtodos.length > 0) {
        const filtertodayTodos = fetchedtodos.filter(function (ele) {
          const today = new Date();
          const formatted = format(today, "yyyy-MM-dd");
          const date = new Date(ele.date);
          const newdate = format(date, "yyyy-MM-dd");
          return newdate === formatted;
        });
        const filterupcomingTodos = fetchedtodos.filter(function (ele) {
          const today = new Date();
          const date = new Date(ele.date);
          const result = isAfter(date, today);
          return result;
        });
        setTodayTodos(filtertodayTodos);
        setUpcomingTodos(filterupcomingTodos);
      } else {
        setApierrors(fetchedtodos);
      }
    };
    fetchData()
  }, []);

  const openDelete = (todo) => {
    setSelectedTodo(todo);
    setDelShow(true);
  };
  const handleDelete = async () => {
    const deletedTodo = await DeleteTodo(selectedTodo);
    if (deletedTodo.id) {
      const filtertodaytodos = todayTodos.filter(function (ele) {
        return ele.id !== selectedTodo.id;
      });
      const filterupcomingtodos = upcomingTodos.filter(function (ele) {
        return ele.id !== selectedTodo.id;
      });
      handleDelClose();
      setUpcomingTodos(filterupcomingtodos);
      setTodayTodos(filtertodaytodos);
    } else {
      return setApierrors(deletedTodo);
    }
  };

  return (
    <>
      
      <div
        // style={{ backgroundColor: "rgb(211, 228, 228)" }}
        className="homediv"
      >
        <Container className="home-cont">
          {todayTodos.length>0 && (<h4 className="pt-4">today</h4>)}
          <div className="carddiv ">
            {todayTodos.map((data) => (
              <Kard todo={data} key={data.id} openDelete={openDelete} />
            ))}
          </div>
          {apierrors && <p className="error">{apierrors}</p>}
          {upcomingTodos.length>0 && <h4 className="pt-5">upcoming</h4>}
          <div className="carddiv">
            {upcomingTodos.map((data) => (
              <Kard todo={data} key={data.id} openDelete={openDelete} />
            ))}
          </div>
          <a className="addtodo mt-5" href="/Todos">
            <i className="fa-regular fa-plus"></i>
            <p className="addpara">Add Todo</p>
          </a>
          <div className="homebutton">
            <Button
              className="mt-3"
              variant="success"
              href="Todos"
              style={{ width: "20%" }}
            >
              All Todos
            </Button>
          </div>
        </Container>
      </div>

      {delshow && (
        <DeleteTaskPopup
          handleDelete={handleDelete}
          setSelectedTodo={setSelectedTodo}
          selectedTodo={selectedTodo}
          delshow={delshow}
          handleDelClose={handleDelClose}
        />
      )}
    </>
  );
};

export default Home;
