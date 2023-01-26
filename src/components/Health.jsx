import React from 'react'
import { useNavigate } from "react-router-dom";
import background from '../images/healthbg.png'
import dentistPic from '../images/dentist.png'
import ginecologyPic from '../images/ginecology.png'
import pregnancyPic from '../images/pregnancy.png'
import cardioPic from '../images/cardio.png'
import kidneyPic from '../images/kidney.png'
import liverPic from '../images/liver.png'
import hospitalPic from '../images/hospital.png'
import psychologistPic from '../images/psychologist.png'
import notebookPic from '../images/notebook.png'
import girlPic from '../images/girl.png'
function Health() {
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
        <button className='b1'><img src={dentistPic} alt="" /></button>
        <button className='b2'><img src={ginecologyPic} alt="" /></button>
        <button className='b3'><img src={pregnancyPic} alt="" /></button>
      </div>
      <div className='p-content2'>
        <button className='b4'><img src={cardioPic} alt="" /></button>
        <button className='b5'><img src={kidneyPic} alt="" /></button>
        <button className='b6'><img src={liverPic} alt="" /></button>
      </div>
      <div className='p-content3'>
        <button className='b7'><img src={hospitalPic} alt="" /></button>
        <button className='b8'><img src={psychologistPic} alt="" /></button>
        <button className='b9'><img src={notebookPic} alt="" /></button>
      </div>
      <div className='p-content4'>
      <button onClick={previous} className="btn2">
          <img src={girlPic} alt="" /> 
          </button>
      </div>
    </div>
    <div><h1>This is my health page</h1>
          </div>
    </div>
  )
}

export default Health