import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import background from '../images/healthbg.png'
import collegePic from '../images/college.png'
import fashionPic from '../images/fashion.png'
import sportsPic from '../images/sports.png'
import couplePic from '../images/couple.png'
import paintingPic from '../images/painting.png'
import technologyPic from '../images/technology.png'
import girlPic from '../images/girl.png'
function Events() {
  const navigate = useNavigate();
  const [onHover, setOnHover] = useState(false);
  const mystyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'tomato',
    color: 'blue',
    backgroundColor: onHover ? 'rgb(0, 0, 0, 0.2)' : 'rgb(15, 15, 27)',
    // boxShadow: onHover ? 'rgb(0, 0, 0, 0.2)': 'rgb(0, 0, 0, 0.2)'
}
const handleHover = () => {
    setOnHover(true);
 };
  function previous() {
    navigate('/personal')
  }
  return (
    <div className='personal' style={{ backgroundImage: `url(${background})` }}>
    <div className="personal-buttons">  
    </div>
    <div className='personal-content'>
      <div className='p-content1'>
        <button className='b1'><img src={collegePic} alt="" /></button>
        <button className='b2'><img src={fashionPic} alt="" /></button>
        <button className='b3'><img src={sportsPic} alt="" /></button>
      </div>
      <div className='p-content2'>
        <button className='b4'><img src={couplePic} alt="" /></button>
        <button className='b5'><img src={paintingPic} alt="" /></button>
        <button className='b6'><img src={technologyPic} alt="" /></button>
      </div>
      <div className='p-content3'>
        <button className='b7' style={mystyle}>Show all events</button>
        <button className='b8' style={mystyle}>Create event</button>
        <button className='b9' style={mystyle}>Add event to wishlist</button>
        {/* onHover={handleHover} */}
      </div>
      <div className='p-content4'>
      <button onClick={previous} className="btn2">
          <img src={girlPic} alt="" /> 
          </button>
      </div>
    </div>
    <div><h1>This is my events page</h1>
          </div>
    </div>
  )
}

export default Events