import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import {Navbar, Container} from 'react-bootstrap';
// import Login from './Components/Login'
// import Signup from './Components/Sign-up';

const App = () => {
  return (
    <div>
      <Navbar bg="success" expand="lg" variant="dark">
       <Container>
         <Navbar.Brand><h1>Todo</h1></Navbar.Brand>
       </Container>
     </Navbar>
     <Router>
       <Routes>
         <Route exact path='/'>Home</Route>
         <Route  path='/'>Todos</Route>
         <Route  path='/'>Account</Route>
         <Route  path='/'>Signup</Route>
         <Route  path='/'>Login</Route>
         <Route  path='/'>Not Found</Route>
       </Routes>
     </Router>
    
    </div>
  );
}

export default App;