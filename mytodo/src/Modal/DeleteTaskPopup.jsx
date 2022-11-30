import React,{useState, useEffect} from 'react'
import {Button, Modal, Spinner} from 'react-bootstrap';
import {DeleteTodo} from '../Api/tasks'

const DeleteTaskPopup = ({todos, setTodos, setSelectedTodo, selectedTodo, delshow, handleDelClose}) =>{
    const [apierrors, setApierrors] = useState(null)
    const [buttonLoading, setButtonLoading] = useState(false)
    const [task, setTask] = useState({
        title:'',
        description:'',
        date:''
  })
    
       useEffect(()=>{
          setTask(selectedTodo)
       },[])
    
    const handleDelete = async (e) =>{
        e.preventDefault()
        setButtonLoading(true)
        const deletedTodo = await DeleteTodo(task)
        if(deletedTodo.id){
          const filtertodos = todos.filter(function(ele){
            return ele.id !== deletedTodo.id
          })
          handleDelClose()
         return setTodos(filtertodos)
        }
        else{
            setButtonLoading(false)
          return setApierrors(deletedTodo)        
        }
        
      }   

    return(
         <>
      <Modal show={delshow} onHide={handleDelClose}>
      {apierrors && <p className="error">{apierrors}</p>}
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This task will be deleted!</Modal.Body>
        <Modal.Footer>
        {!buttonLoading && (<Button variant="success" onClick={handleDelete}>Delete</Button>)} 
        {buttonLoading && (<Button variant="success" onClick={handleDelete}  disabled={buttonLoading}>
            <Spinner
                    as="span"
                    variant="light"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"/>     
            Delete
          </Button>)}
        </Modal.Footer>
      </Modal>
    </>

    )
}

export default DeleteTaskPopup