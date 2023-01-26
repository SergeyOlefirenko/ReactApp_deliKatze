import React from 'react'
import { AppContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import background from '../images/babybg.png'


function Babysitters() {
    const {city, users} = useContext(AppContext)
    const navigate = useNavigate();
    
  return (
    <div className='personal' style={{ backgroundImage: `url(${background})` }}> 
    <div className='available'>
    Here is available Babysitters list for: {city}
    </div>
    
    <div className='available'>
    Available: {users.map((i) => (
            <div className='content'>
              <div className='userName'> {i.name}</div>
            </div>
          ))}
    </div>
    
    </div>
  )
}

export default Babysitters