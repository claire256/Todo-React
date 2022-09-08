import React from 'react';
import './App.css';
import {Navbar, Container} from 'react-bootstrap';
import Login from './Components/Login'

const App = () => {
  return (
    <>
     <Navbar bg="success" expand="lg" variant="dark">
       <Container>
         <Navbar.Brand><h1>Todo</h1></Navbar.Brand>
       </Container>
     </Navbar>
    
    <Login />
    </>
  );
}

export default App;