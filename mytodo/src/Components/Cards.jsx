import React from 'react';
import { Card } from 'react-bootstrap';

const Cards = ()=>{

    return(
        <>    
        <Card className="shadow-lg">
            <Card.Body>
              <Card.Text>
                  <p>Activity:</p>
                  <p>Description:</p>
                  <p>Date:</p>
              </Card.Text>
              <a href="Todos">View more</a>
            </Card.Body>
        </Card>
        </>
    )
}

export default Cards;