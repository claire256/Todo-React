import React, {useState} from 'react';
import {AddUser} from '../Api/User'
import {useNavigate} from 'react-router-dom';
import AuthUser from '../Auth/AuthUser'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';


const Signup = ()=>{
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({        
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            confirm_password:''
        })
            const updateInput = (e)=>{
           setUser({...user,[e.target.name]: e.target.value})            
}
    const addAccount = async (e)=>{
        e.preventDefault()
        setErrors(AuthUser(user))
        // console.log(user)
        const UserAdded = await AddUser(user)
       console.log(UserAdded)
       if(UserAdded.status === 200){
        console.log('eeeeeeeee', UserAdded.status)
       return  navigate('/')
      }
      else{
          setErrors('invalid Email or Password')
      }
    }
    
    return(
    <>    
     <Container className="pt-3 sign-cont">
         <Row>
             <Col>
             <h4>Get started with us today! Create your account by filling out the information below</h4>
                <Card style={{width: '80%'}} className="mt-4">
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label style={{fontSize:'20px'}}>First name</Form.Label>
                                <Form.Control type="name" name="first_name" onChange={updateInput} placeholder="Enter first name"/>
                                {errors.first_name && <p className="error">{errors.first_name}</p>}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label style={{fontSize:'20px'}}>Last name</Form.Label>
                                <Form.Control type="name" name="last_name" onChange={updateInput} placeholder="Enter last name"/>
                                {errors.last_name && <p className="error">{errors.last_name}</p>}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label style={{fontSize:'20px'}}>Email</Form.Label>
                                <Form.Control type="email" name="email" onChange={updateInput} placeholder="Enter email"/>
                                {errors.email && <p className="error">{errors.email}</p>}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label style={{fontSize:'20px'}}>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={updateInput} placeholder="Enter password"/>
                                {errors.password && <p className="error">{errors.password}</p>}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label style={{fontSize:'20px'}}>Confirm Password</Form.Label>
                                <Form.Control type="password" name="confirm_password" onChange={updateInput} placeholder="Enter password"/>
                                {errors.confirm_password && <p className="error">{errors.confirm_password}</p>}
                            </Form.Group>
                            <Form.Group className="pt-2">
                                <Button onClick={addAccount} style={{fontSize:'20px'}} variant="success" type="submit">Add Account</Button>
                            </Form.Group>
                        </Form>
                        <p className="mt-3" style={{fontSize:'17px'}}>Already have an account? Login <a href="Login">here</a></p>
                    </Card.Body>
                </Card>
             </Col>
         </Row>
     </Container>
    </>
    )
}

export default Signup