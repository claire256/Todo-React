import React from 'react';

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
                 <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                 <Nav.Item><Nav.Link href="/todos">Todos</Nav.Link></Nav.Item>
                 <Nav.Item><Nav.Link href="/account">Account</Nav.Link></Nav.Item>
                 <Nav.Item><Nav.Link href="/signup">Signup</Nav.Link></Nav.Item>
                 <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
               </Nav>
             </Navbar.Collapse>        
             </Container>
         </Navbar>
        </>
    );
}

export default NavigationBar;