import React,{useState} from 'react';
import {AddTodo} from '../Api/tasks'
import {Button, Form, Modal} from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const EditTask = ({show, handleClose})=>{
    // const [selectedDate, setSelectedDate] = useState(new Date());

    const [task, setTask] = useState({
        title:'',
        description:'',
        date:''
  })
  const updateTask =(e)=> {
      setTask({...task, [e.target.name]: e.target.value})
}

const handleSubmit = async(e)=>{
      e.preventDefault() 
      const AddedTodo = await AddTodo(task)  
      console.log('Addeddd', AddedTodo) 
      handleClose()
  }
  
    return(
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group>
                <Form.Label >Title</Form.Label>
                <Form.Control type="text" name="title" onChange={updateTask}/>
            </Form.Group>
            <Form.Group className="mt-2">
            <Form.Label >Description</Form.Label>
            <Form.Control type="text" name="description" onChange={updateTask}/>
            </Form.Group>
            <Form.Group  className="mt-4">
            <Form.Label >Date</Form.Label>
            <Form.Control type="date" name="date" onChange={updateTask}/> 
             {/* <DatePicker 
            selected ={selectedDate} 
            onChange={(date)=> setSelectedDate(date)} 
            minDate = {new Date()}/>  */}
            </Form.Group>
            </Form>
            </Modal.Body>
        <Modal.Footer>

            <Button variant="success"  onClick={handleSubmit}>
             Update
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default EditTask;