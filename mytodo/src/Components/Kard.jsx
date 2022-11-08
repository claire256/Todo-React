import React,{useState} from 'react';
import { Card } from 'react-bootstrap'; 
import EditTask from '../Modal/EditTask';

const Kard = ({date, title, description, index})=>{
    const[show, setShow] = useState(false)
    
    const handleClose = ()=>{
        setShow(!show)
    }
    return(
        <>    
        <Card className="card" border="warning">
            <Card.Body>
              <Card.Text>
                 <div className="date">
                  <p>{date}</p>
                  {/* <i class="fa-regular fa-clock"></i><p>12:00pm</p> */}
                  </div>
                  <h6 className="pd-3">{title}</h6>
                  <p>{description}</p>
                  <div className="cardicon">
                  <i class="fa-solid fa-pen-to-square" onClick={()=> setShow(true) }></i>
                  <i class="fa-regular fa-trash-can"></i>
                  </div>
              </Card.Text>
            </Card.Body>
        </Card>
        <EditTask show = {show} handleClose = {handleClose}/>
        </>
    )
}

export default Kard;