import React from 'react';
import {Link} from 'react-router-dom';

import {Navbar, Nav, Container} from 'react-bootstrap';

const NavigationBar = ()=>{

    return(
        <>
         <Navbar expand="lg" bg="success" variant="dark" collapseOnSelect>
             <Container>          
             <Navbar.Brand href="/"><h1>Todo</h1></Navbar.Brand> 
             <Navbar.Toggle aria-controls="basic-navbar-nav"/>
             <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                 <Nav.Link as={Link} to="/">Home</Nav.Link>
                 <Nav.Link as={Link} to="/todos">Todos</Nav.Link>
                 <Nav.Link as={Link} to="/account">Account</Nav.Link>
                 <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                 <Nav.Link as={Link} to="/login">Login</Nav.Link>
               </Nav>
             </Navbar.Collapse>        
             </Container>
         </Navbar>
        </>
    );
}

export default NavigationBar;