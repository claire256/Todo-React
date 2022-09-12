import React from 'react';
import './App.css';
import {Navbar, Container} from 'react-bootstrap';
import Login from './Components/Login'
import Signup from './Components/Sign-up';

const App = () => {
  return (
    <div>
      <Navbar bg="success" expand="lg" variant="dark">
       <Container>
         <Navbar.Brand><h1>Todo</h1></Navbar.Brand>
       </Container>
     </Navbar>
    <Signup />
    <Login />
    </div>
  );
}

export default App;