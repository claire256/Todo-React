import React from 'react';
import { Card } from 'react-bootstrap';

const Kard = ({date, title, description})=>{

    return(
        <>    
        <Card className="card" border="warning">
            <Card.Body>
              <Card.Text>
                 <div className="date">
                  <p>{date}</p>
                  </div>
                  <h6 className="pd-3">{title}</h6>
                  <p>{description}</p>
                  <div className="cardicon">
                  <i class="fa-solid fa-pen-to-square"></i>
                  <i class="fa-regular fa-trash-can"></i>
                  </div>
              </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default Kard;