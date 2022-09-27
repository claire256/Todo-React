import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Cards from '../Components/Cards'


const Home = ()=>{

    return(
        <>
        <Container className="home-cont">
        <div className="mt-5 pt-5">  
        <h3>Today's tasks</h3>
        <Cards/>
        </div>
        <div className="mt-5">
        <h3>Upcoming tasks</h3>
        <Cards/>
        </div>
        <Button className="home mt-5" variant ="success" href="Todos">All Todos</Button>
        </Container>
        </>
    )
}

export default Home;