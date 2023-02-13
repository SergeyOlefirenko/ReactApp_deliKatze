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
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'
function Events() {
  const navigate = useNavigate();
  const [onHover, setOnHover] = useState(false);
  const [showText, setShowText] = useState(false)
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
        <button className='b1' id="element" data-tooltip-content="Education"><img src={collegePic} alt="" /></button>
        <button className='b2' id="element1" data-tooltip-content="Fashion"><img src={fashionPic} alt="" /></button>
        <button className='b3' id="element2" data-tooltip-content="Sport"><img src={sportsPic} alt="" /></button>
        <ReactTooltip anchorId="element" style={style}/>
        <ReactTooltip anchorId="element1" style={style}/>
        <ReactTooltip anchorId="element2" style={style}/>
      </div>
      <div className='p-content2'>
        <button className='b4' id="element3" data-tooltip-content="Social events"><img src={couplePic} alt="" /></button>
        <button className='b5' id="element4" data-tooltip-content="Art"><img src={paintingPic} alt="" /></button>
        <button className='b6' id="element5" data-tooltip-content="Technology"><img src={technologyPic} alt="" /></button>
        <ReactTooltip anchorId="element3" style={style}/>
        <ReactTooltip anchorId="element4" style={style}/>
        <ReactTooltip anchorId="element5" style={style}/>
      </div>
      <li><a onClick={() => {setShowText(!showText)}}><h3>Expand</h3></a></li><br></br>
        {showText === true && <div className='p-content3'>
        <button className='b7' style={mystyle}>Show all events</button>
        <button className='b8' style={mystyle}>Create event</button>
        <button className='b9' style={mystyle}>Add event to wishlist</button>
        {/* onHover={handleHover} */}
      </div>} 
      
      <div className='p-content4'>
      <button onClick={previous} className="btn2" id="element6" data-tooltip-content="Personal page">
          <img src={girlPic} alt="" /> 
          </button>
          <ReactTooltip anchorId="element6" style={style}/>
      </div>
    </div>
    <div><h1>This is my events page</h1>
          </div>
    </div>
  )
}

export default Events