import React, {useState} from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';


const Signup = ()=>{

    const [user, setUser] = useState({        
            firstname:'',
            lastname:'',
            email:'',
            password:''
        })
    
        const updateInput = (e)=>{
           setUser({...user,[e.target.name]: e.target.value})            
}
    const addAccount = (e)=>{
        e.preventDefault()
        console.log(user)
    }

    return(
    <>    
     <Container className="pt-3 sign-cont">
         <Row>
             <Col>
                <Card style={{width: '80%'}}>
                    <Card.Header><h3>Sign up</h3></Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="pt-4">
                                <Form.Label style={{fontSize:'20px'}}>First name</Form.Label>
                                <Form.Control type="name" name="firstname" onChange={updateInput} placeholder="Enter first name"/>
                            </Form.Group>
                            <Form.Group className="pt-4">
                                <Form.Label style={{fontSize:'20px'}}>Last name</Form.Label>
                                <Form.Control type="name" name="lastname" onChange={updateInput} placeholder="Enter last name"/>
                            </Form.Group>
                            <Form.Group className="pt-4">
                                <Form.Label style={{fontSize:'20px'}}>Email</Form.Label>
                                <Form.Control type="email" name="email" onChange={updateInput} placeholder="Enter email"/>
                            </Form.Group>
                            <Form.Group className="pt-4">
                                <Form.Label style={{fontSize:'20px'}}>Password</Form.Label>
                                <Form.Control type="name" name="password" onChange={updateInput} placeholder="Enter password"/>
                            </Form.Group>
                            <Form.Group className="pt-4">
                                <Button onClick={addAccount} style={{fontSize:'20px'}} variant="success" type="submit">Add Account</Button>
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

export default Signup