import React,{useState} from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
 

let Login = ()=>{
    
    const [state, setState] = useState({
        user :{
            email:'',
            password:''
        }
    })

    const updateInput = (e)=>{
           setState({
               ...state,
               user:{
                   ...state.user,
                   [e.target.name]: e.target.value
               }
           })
    
    }

    let login =(e)=>{
       e.preventDefault()
      
       console.log(state.user);
    }

    return(
        <>
         <Container className="pt-5 cont2">
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
                                  <Button onClick={login} variant="success" type="submit" style={{fontSize:'20px'}}>NEXT</Button>                                 
                              </Form.Group>
                          </Form>
                      </Card.Body>
                  </Card>
                 </Col>
             </Row>
         </Container>
        </>
    )
}

export default Login;