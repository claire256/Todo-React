import React, {useState} from 'react';
import {LoginUser} from '../Api/User';
import {useNavigate} from 'react-router-dom';
import AuthUser from '../Auth/AuthUser';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
 

const Login = ()=>{
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
            email:'',
            password:''
    })

    const updateInput = (e)=>{
           setUser({...user,[e.target.name]: e.target.value
           })    
    }

    const signIn =async (e)=>{
       e.preventDefault()
       setErrors(AuthUser(user))
       const LoggedUser = await LoginUser(user)
       console.log('mmmmm>>>>>',LoggedUser)
       if(LoggedUser.accessToken){
         console.log('eeeeeeeee', LoggedUser.accessToken)
        return  navigate('/')
       }
       else{
           setErrors('invalid Email or Password')
       }
    
    }

    return(
        <>
         <Container className="pt-5 login-cont">
             <Row>
                 <Col>
                  <Card style={{width: '80%'}}>
                      <Card.Header>
                          <h3>Login</h3>
                      </Card.Header>
                      <Card.Body>
                          <Form>
                              <Form.Group>
                                  <Form.Label style={{fontSize:'20px'}}>
                                      Email address
                                  </Form.Label>
                                  <Form.Control 
                                  name="email"
                                  onChange={updateInput}
                                  type="Email" 
                                  placeholder="Enter Email"/>
                                  {errors.email && <p className="error">{errors.email}</p>}
                                  </Form.Group>
                                <Form.Group>
                                  <Form.Label style={{fontSize:'20px'}}>
                                      Password
                                  </Form.Label>
                                  <Form.Control 
                                  name="password"
                                  onChange={updateInput}
                                  type="password" 
                                  placeholder="Enter Password"/>
                                  {errors.password && <p className="error">{errors.password}</p>}
                                  </Form.Group>
                                <Form.Group> 
                                  <Button className="mt-4" onClick={signIn} 
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