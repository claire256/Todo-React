import React,{useState, useEffect} from 'react';
import {Container, Button } from 'react-bootstrap';
import Kard from '../Components/Kard'
import {GetTodos} from '../Api/tasks';
import {format,isAfter} from 'date-fns'

const Home = ()=>{
    const [todayTodos, setTodayTodos] = useState([]);
    const [upcomingTodos, setUpcomingTodos] = useState([])
     const [apierrors, setApierrors] = useState(null)

    useEffect(()=>{
      const fetchData = async ()=>{
        const fetchedtodos = await GetTodos()
        if(fetchedtodos.length>0){
           const filtertodayTodos = fetchedtodos.filter(function(ele){
            const today = new Date()
            const formatted = format(today, 'yyyy-MM-dd')
            const date = new Date(ele.date)
            const newdate= format(date, 'yyyy-MM-dd')
            return newdate === formatted
          })
          const filterupcomingTodos = fetchedtodos.filter(function(ele){
            const today = new Date() 
            const date = new Date(ele.date)
            const result = isAfter(date, today)
              return result
          })  
          setTodayTodos(filtertodayTodos)
          setUpcomingTodos(filterupcomingTodos)
        }
        else{
          setApierrors(fetchedtodos)
        }
     }
     fetchData()
       
    }, [])
  
    return(
        <>
        <div style={{backgroundColor: 'rgb(211, 228, 228)'}} className="homediv">
        <Container className="home-cont">
        <h4 className="pt-4">Today's tasks</h4>
        <div className="carddiv "> 
        {todayTodos.map((data) => <Kard todo={data} key={data.id} /> )}
        </div>
         {apierrors && <p className="error">{apierrors}</p>}
        <h4 className="pt-5">Upcoming tasks</h4>
        <div className="carddiv">
         {upcomingTodos.map((data) => <Kard todo={data} key={data.id} />)}
        </div>
        <a className="addtodo mt-5" href="/Todos">
        <i className="fa-regular fa-plus"></i><p className="addpara">Add Todo</p>
        </a>
        <div className="homebutton">
        <Button className="mt-3" variant ="success" href="Todos" style={{width: '20%'}}>All Todos</Button>
        </div>
       </Container>
        </div>
        </>
    )
}

export default Home;