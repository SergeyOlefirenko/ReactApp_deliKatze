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
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'
function Rest() {
  const navigate = useNavigate();
  function previous() {
    navigate('/personal')
  }
  const style={
    backgroundColor: 'transparent',
    color: 'teal',
    fontSize: '24px',
  }
  return (
    <div className='personal' style={{ backgroundImage: `url(${background})` }}>
    <div className="personal-buttons">  
    </div>
    <div className='personal-content'>
      <div className='p-content1'>
        <button className='b1' id="element" data-tooltip-content="Cafes"><img src={coffeePic} alt="" /></button>
        <button className='b2' id="element1" data-tooltip-content="Restaurants"><img src={winePic} alt="" /></button>
        <button className='b3' id="element2" data-tooltip-content="Food"><img src={foodPic} alt="" /></button>
        <ReactTooltip anchorId="element" style={style}/>
        <ReactTooltip anchorId="element1" style={style}/>
        <ReactTooltip anchorId="element2" style={style}/>
      </div>
      <div className='p-content2'>
        <button className='b4' id="element3" data-tooltip-content="Museums"><img src={museumPic} alt="" /></button>
        <button className='b5' id="element4" data-tooltip-content="Concerts"><img src={musicPic} alt="" /></button>
        <button className='b6' id="element5" data-tooltip-content="Libruarys"><img src={bookPic} alt="" /></button>
        <ReactTooltip anchorId="element3" style={style}/>
        <ReactTooltip anchorId="element4" style={style}/>
        <ReactTooltip anchorId="element5" style={style}/>
      </div>
      <div className='p-content3'>
        <button className='b7' id="element6" data-tooltip-content="Vacation"><img src={vacationPic} alt="" /></button>
        <button className='b8' id="element7" data-tooltip-content="Mountain climbing"><img src={mountainPic} alt="" /></button>
        <button className='b9' id="element8" data-tooltip-content="Trip"><img src={balloonPic} alt="" /></button>
        <ReactTooltip anchorId="element6" style={style}/>
        <ReactTooltip anchorId="element7" style={style}/>
        <ReactTooltip anchorId="element8" style={style}/>
      </div>
      <div className='p-content4'>
      <button onClick={previous} className="btn2" id="element9" data-tooltip-content="Personal page">
          <img src={girlPic} alt="" /> 
          </button>
          <ReactTooltip anchorId="element9" style={style}/>
      </div>
    </div>
    <div><h1>This is my rest page</h1>
          </div>
    </div>
  )
}

export default Rest