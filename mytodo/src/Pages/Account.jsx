import React from 'react';
import { Button, Container } from 'react-bootstrap';


const Account = ()=>{

    return(
      <>
      <div style={{backgroundColor: 'rgb(211, 228, 228)', height: '870px'}}>
      <Container>
        <div className="text-center">
        <h5 style={{fontSize: '30px'}} className="pt-4">Profile</h5>
        <i class="fa-solid fa-circle-user"></i>
        <p style={{fontSize: '25px'}} className="pt-2">Claire Nabwami</p>
        <i class="fa-regular fa-pen-to-square"></i>
        </div>
        <hr
           style={{
            background: 'lime',
            color: 'red',
            height: '3px',
            width: '100%'
          }}
         />
        <div className="mt-5">
          <div className="acc-icons">
        <i class="fa-regular fa-calendar-days"></i>
        <p style={{fontSize: '19px'}}>Calendar</p>
        </div>
        <hr
           style={{
            background: 'lime',
            color: 'red',
            height: '3px',
            width: '100%'
          }}
         />
        <div className="acc-icons">
        <i class="fa-regular fa-envelope"></i>
        <p style={{fontSize: '19px'}}>Email Address</p>
        </div>
        <hr
           style={{
            background: 'lime',
            color: 'red',
            height: '3px',
            width: '100%'
          }}
         />
        <div className="acc-icons">
        <i class="fa-solid fa-phone"></i>
        <p style={{fontSize: '19px'}}>+256 788536892</p>
        </div>
        <hr
           style={{
            background: 'lime',
            color: 'red',
            height: '3px',
            width: '100%'
          }}
         />
        <div className="acc-icons">
        <i class="fa-solid fa-gear"></i>
        <p style={{fontSize: '19px'}}>Settings</p>
        </div>
        <hr
           style={{
            background: 'lime',
            color: 'red',
            height: '3px',
            width: '100%'
          }}
         />
        <div className="acc-button">
        <Button style={{width: '200px'}} variant="success">Edit profile</Button>
        </div>
        </div>
      </Container>
      </div>
      </>
    )
}

export default Account;