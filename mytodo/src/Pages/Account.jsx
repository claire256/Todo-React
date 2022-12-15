import React from 'react';
import { useState, useEffect } from 'react';
import {Button, Container} from 'react-bootstrap';
import EditProfilePopup from '../Modal/EditProfilePopup'
import {GetUser} from '../Api/User';

const Account = ()=>{
    const [user, setUser] = useState({})
    const [editShow, setEditShow] = useState(false)

    useEffect(()=>{
     const fetchUser = async()=>{
       const fetchedUser = await GetUser(user)
       setUser(fetchedUser)
     }
     fetchUser()
    }, [])
    const handleEditClose =()=> setEditShow(false)
    
    const OpenEdit =()=>{
       setEditShow(true)
     }

    return(
      <>
      <div style={{backgroundColor: 'rgb(211, 228, 228)', height: '870px'}}>
      <Container>
        <div className="text-center">
        <h5 style={{fontSize: '30px'}} className="pt-4">Profile</h5>
        <i className="fa-solid fa-circle-user"></i>
        <p style={{fontSize: '25px'}} className="pt-2">{user.first_name}</p>
        <p style={{fontSize: '25px'}} className="pt-2">{user.last_name}</p>
        <p style={{fontSize: '25px'}} className="pt-2">{user.email}</p>
        
        <div className="acc-button">
        <Button style={{width: '200px'}} variant="success" onClick={OpenEdit}>Edit profile</Button>
        </div>
        </div>
      </Container>
      </div>
      {editShow && <EditProfilePopup editShow={editShow} handleEditClose={handleEditClose} 
      user={user} setUser={setUser}/>}
      </>
    )
}

export default Account;