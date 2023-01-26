import React from 'react'
import { AppContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import background from '../images/background.jpg'
import girlPic from '../images/girl.png'

function Fitness() {
    const {city, users} = useContext(AppContext)
    const navigate = useNavigate();
    function previous() {
        navigate('/personal')
      }
  return (
    <div className='personal' style={{ backgroundImage: `url(${background})` }}> 
    <div className='available'>
    Here is the list of fitness place for: {city} 
    </div>
    
    <div className='available'>
    Available: {users.map((i) => (
            <div className='content'>
              <div className='userName'> {i.name}</div>
            </div>
          ))}
    </div>
    <div className='p-content4'>
      <button onClick={previous} className="btn2">
          <img src={girlPic} alt="" /> 
          </button>
      </div>
    </div>
  )
}

export default Fitness
