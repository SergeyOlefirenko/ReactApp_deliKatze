import React from 'react'
import { useNavigate } from "react-router-dom";
import background from '../images/healthbg.png'
import dietologyPic from '../images/dietology.png'
import hairPic from '../images/hair.png'
import nailsPic from '../images/nails.png'
import makeupPic from '../images/makeup.png'
import girlPic from '../images/girl.png'
function Beauty() {
  const navigate = useNavigate();
  function previous() {
    navigate('/personal')
  }
  return (
    <div className='personal' style={{ backgroundImage: `url(${background})` }}>
    <div className="personal-buttons">  
    </div>
    <div className='personal-content'>
      <div className='p-content1'>
        <button className='b1'><img src={dietologyPic} alt="" /></button>
        <button className='b2'><img src={hairPic} alt="" /></button>
      </div>
      <div className='p-content2'>
        <button className='b3'><img src={nailsPic} alt="" /></button>
        <button className='b4'><img src={makeupPic} alt="" /></button>
      </div>
      <div className='p-content4'>
      <button onClick={previous} className="btn2">
          <img src={girlPic} alt="" /> 
          </button>
      </div>
    </div>
    <div><h1>This is my services page</h1>
          </div>
    </div>
  )
}

export default Beauty