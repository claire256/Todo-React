import React from 'react';
import { Card } from 'react-bootstrap';

const Cards = ()=>{

    return(
        <>    
        <Card className="card">
            <Card.Body>
              <Card.Text>
                  <p>Dinner</p>
                  <p>go to fairway hotel for dinner</p>
                  <i class="fa-solid fa-pen-to-square"></i>
                  <i class="fa-regular fa-trash-can"></i>
              </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default Cards;