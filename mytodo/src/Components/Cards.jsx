import React from 'react';
import { Card } from 'react-bootstrap';

const Cards = ()=>{

    return(
        <>    
        <Card className="card" border="warning">
            <Card.Body>
              <Card.Text>
                 <div className="date">
                  <p>02-09-2022</p>
                  <i class="fa-regular fa-clock"></i><p>12:00pm</p>
                  </div>
                  <h6 className="pd-3">Dinner</h6>
                  <p>go to fairway hotel for dinner</p>
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

export default Cards;