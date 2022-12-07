import React from 'react';
import { Container, Button } from 'react-bootstrap';
// import Kard from '../Components/Kard'


const Home = ()=>{

    return(
        <>
        <div style={{backgroundColor: 'rgb(211, 228, 228)'}} className="homediv">
        <Container className="home-cont">
        <h4 className="pt-4">Today's tasks</h4>
        <div className="carddiv "> 
    
        </div>
        <h4 className="pt-5">Upcoming tasks</h4>
        <div className="carddiv">
        
        </div>
        <a className="addtodo mt-5" href="/">
        <i class="fa-regular fa-plus"></i><p className="addpara">Add Todo</p>
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