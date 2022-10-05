import React from 'react';
import { Card } from 'react-bootstrap';

const Kard = ({date, activity, description})=>{

    return(
        <>    
        <Card className="card" border="warning">
            <Card.Body>
              <Card.Text>
                 <div className="date">
                  <p>{date}</p>
                  <i class="fa-regular fa-clock"></i><p>12:00pm</p>
                  </div>
                  <h6 className="pd-3">{activity}</h6>
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