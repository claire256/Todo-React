import React,{useEffect, useState} from 'react';
import {Button, Form, Modal, Spinner} from 'react-bootstrap';
import {format} from 'date-fns';

const EditTaskPopup = ({editShow, handleEditClose, handleEdit, selectedTodo, setSelectedTodo, setTask, task, errors })=>{
     
    const [buttonLoading, setButtonLoading] = useState(false)
    const [apierrors, setApierrors] = useState(null)
  
const updateTask =(e)=> {
      setTask({...task, [e.target.name]: e.target.value})
}
   useEffect(()=>{
       setTask(selectedTodo)
   },[])


    return(
        <>
        <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group>
               {apierrors && <p className="error">{apierrors}</p>}
                <Form.Label >Title</Form.Label>
                <Form.Control type="text" name="title" defaultValue={selectedTodo.title} onChange={updateTask}/>
                {errors.title && <p className = "error">{errors.title}</p>}
            </Form.Group>
            <Form.Group className="mt-2">
                <Form.Label >Description</Form.Label>
                <Form.Control type="text" name="description" defaultValue={selectedTodo.description} onChange={updateTask}/>
               {errors.description && <p className = "error">{errors.description}</p>}
            </Form.Group>
                <Form.Group  className="mt-4">
                <Form.Label >Date</Form.Label>
                <Form.Control type="date" name="date" 
                min={new Date().toISOString().split('T')[0]}
                defaultValue={selectedTodo.date?format(new Date(selectedTodo.date),'yyyy-MM-dd'):''}           
                onChange={updateTask}/> 
               {errors.date && <p className = "error">{errors.date}</p>}
            </Form.Group>
            </Form>
            </Modal.Body>
        <Modal.Footer>
        {!buttonLoading && (<Button variant="success" onClick={handleEdit}>Update</Button>)} 
        {buttonLoading && (<Button variant="success" onClick={handleEdit}  disabled={buttonLoading}>
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

export default EditTaskPopup;