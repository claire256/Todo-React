import React, {useState} from 'react';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
 

const Login = ()=>{
    
    const [user, setUser] = useState({
            email:'',
            password:''
    })

    const updateInput = (e)=>{
           setUser({...user,[e.target.name]: e.target.value
           })    
    }

    let signin =(e)=>{
       e.preventDefault()
         console.log(user);
    }

    return(
        <>
         <Container className="pt-5 login-cont">
             <Row>
                 <Col>
                  <Card>
                      <Card.Header>
                          <h3>Login</h3>
                      </Card.Header>
                      <Card.Body>
                          <Form>
                              <Form.Group className="pt-3">
                                  <Form.Label style={{fontSize:'20px'}}>
                                      Email address
                                  </Form.Label>
                                  <Form.Control 
                                  name="email"
                                  onChange={updateInput}
                                  type="Email" 
                                  placeholder="Enter Email"/>
                                  </Form.Group>
                                <Form.Group className="pt-3">
                                  <Form.Label style={{fontSize:'20px'}}>
                                      Password
                                  </Form.Label>
                                  <Form.Control 
                                  name="password"
                                  onChange={updateInput}
                                  type="password" 
                                  placeholder="Enter Password"/>
                                  </Form.Group>
                                <Form.Group> 
                                  <Button className="mt-4" onClick={signin} 
                                  variant="success" type="submit" 
                                  style={{fontSize:'20px'}}>SUBMIT</Button>                                 
                              </Form.Group>
                          </Form>
                             <p className="mt-3" style={{fontSize:'17px'}}>Don't have an account? <a href="Signup">Sign up</a></p>
                      </Card.Body>
                  </Card>
                 </Col>
             </Row>
         </Container>
        </>
    )
}

export default Login;