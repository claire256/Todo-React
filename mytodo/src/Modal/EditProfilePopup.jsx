import React, { useEffect ,useState} from 'react';
import {Button, Spinner, Form, Modal} from 'react-bootstrap';
import {EditUser} from '../Api/User';

const EditProfilePopup = ({editShow, handleEditClose, user, setUser})=>{
    const [errors, setErrors] = useState({})
    const [apierrors, setApierrors] = useState(null)
    const [buttonLoading, setButtonLoading] = useState(false)
    const [editUser, setEditUser] = useState({        
        first_name:'',
        last_name:''
    })
        const updateUser = (e)=>{
       setEditUser({...editUser,[e.target.name]: e.target.value})            
    }
    useEffect(()=>{
      setEditUser(user)
    },[])
    const validateUser = (user) =>{
      let errors ={}
      if(!user.first_name){
        errors.first_name = "First name required"
     }
     if(!user.last_name){
         errors.last_name = "Last name required"
     }
     return errors
    }
    const handleSubmit = async(e)=>{
      e.preventDefault()
      const formError = validateUser(editUser)
      if(Object.keys(formError).length>0){
        setErrors(formError)
        return        
      }
      setButtonLoading(true)
      const editedUser = await EditUser(editUser)
      if(editedUser.id){
      setUser(editedUser)
      handleEditClose()
    }
      else{
        setApierrors(editedUser)
      }
      setButtonLoading(false)
    } 

    return(
        <>
        <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form >
            <Form.Group>
            {apierrors && <p className="error">{apierrors}</p>}
            <Form.Label >First Name</Form.Label>
            <Form.Control type="name" name="first_name" defaultValue={editUser.first_name} onChange={updateUser}/>
            {errors.first_name && <p className="error">{errors.first_name}</p>}
            </Form.Group>
            <Form.Group className="mt-2">
            <Form.Label >Last Name</Form.Label>
            <Form.Control type="name" name="last_name" defaultValue={editUser.last_name} onChange={updateUser}/>
            {errors.last_name && <p className="error">{errors.last_name}</p>}
            </Form.Group>
            </Form>
            </Modal.Body>
        <Modal.Footer>
        {!buttonLoading && (<Button variant="success" type="" onClick={handleSubmit}>Update</Button>)} 
        {buttonLoading && (<Button variant="success" onClick={handleSubmit}  disabled={buttonLoading}>
            <Spinner
                    as="span"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"/>     
            Update
          </Button>)}
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default EditProfilePopup