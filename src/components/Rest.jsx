import React from 'react'
import { useNavigate } from "react-router-dom";
import background from '../images/healthbg.png'
import coffeePic from '../images/coffee.png'
import winePic from '../images/wine.png'
import foodPic from '../images/food.png'
import museumPic from '../images/museum.png'
import musicPic from '../images/music.png'
import bookPic from '../images/book.png'
import vacationPic from '../images/vacation.png'
import mountainPic from '../images/mountain.png'
import balloonPic from '../images/balloon.png'
import girlPic from '../images/girl.png'
function Rest() {
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
        <button className='b1'><img src={coffeePic} alt="" /></button>
        <button className='b2'><img src={winePic} alt="" /></button>
        <button className='b3'><img src={foodPic} alt="" /></button>
      </div>
      <div className='p-content2'>
        <button className='b4'><img src={museumPic} alt="" /></button>
        <button className='b5'><img src={musicPic} alt="" /></button>
        <button className='b6'><img src={bookPic} alt="" /></button>
      </div>
      <div className='p-content3'>
        <button className='b7'><img src={vacationPic} alt="" /></button>
        <button className='b8'><img src={mountainPic} alt="" /></button>
        <button className='b9'><img src={balloonPic} alt="" /></button>
      </div>
      <div className='p-content4'>
      <button onClick={previous} className="btn2">
          <img src={girlPic} alt="" /> 
          </button>
      </div>
    </div>
    <div><h1>This is my rest page</h1>
          </div>
    </div>
  )
}

export default Rest