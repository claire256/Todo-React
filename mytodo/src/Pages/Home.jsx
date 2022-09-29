import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Cards from '../Components/Cards'

const Home = ()=>{

    return(
        <>
        <div style={{backgroundColor: 'rgb(211, 228, 228)'}} className="homediv">
        <Container className="home-cont">
        <h4 className="pt-5">Today's tasks</h4>
        <div className="carddiv "> 
        <Cards/>
        <Cards/>
        <Cards/>
        </div>
        <h4 className="pt-5">Upcoming tasks</h4>
        <div className="carddiv">
        <Cards/>
        <Cards/>
        <Cards/>
        </div>
        <Button className="home mt-5" variant ="success" href="Todos">All Todos</Button>
       </Container>
        </div>
        </>
    )
}

export default Home;