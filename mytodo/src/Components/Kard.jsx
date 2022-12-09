import React from 'react';
import { Card } from 'react-bootstrap';
import {format} from 'date-fns'

const Kard = ({todo})=>{
    const date = new Date(todo.date)
    const formatDate = format(date, 'yyyy-MM-dd')
    return(
        <>    
        <Card className="card" border="warning" key={todo.id}>
            <Card.Body>
              <Card.Text>
                 <div className="date">
                  <p>{formatDate}</p>
                  </div>
                  <p className="pd-3">{todo.title}</p>
                  <p>{todo.description}</p>
                  <div className="cardicon">
                  <i className="fa-solid fa-pen-to-square"></i>
                  <i className="fa-regular fa-trash-can"></i>
                  </div>
              </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default Kard;