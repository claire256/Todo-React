import React from 'react';
import {Card} from 'react-bootstrap'; 

const Kard = ({todo, editShow, setEditShow, openEdit})=>{
    
    return(
        <>    
        <Card className="card" border="warning" key={todo.id}>
            <Card.Body>
              <Card.Text>
                 <div className="date">
                  <p>{todo.date}</p>
                  </div>
                  <p className="pd-3">{todo.title}</p>
                  <p>{todo.description}</p>
                  <div className="cardicon">
                  <i className="fa-solid fa-pen-to-square" onClick={()=> openEdit(todo)}></i>
                  <i className="fa-regular fa-trash-can"></i>
                  </div>
              </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default Kard;