import React from 'react'
import { useNavigate } from "react-router-dom";
import background from '../images/healthbg.png'
import cleanerPic from '../images/cleaner.png'
import veterinarianPic from '../images/veterinarian.png'
import engineerPic from '../images/engineer.png'
import realestatePic from '../images/realestate.png'
import automobilePic from '../images/automobile.png'
import chargingPic from '../images/charging.png'
import girlPic from '../images/girl.png'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'
function Services() {
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
        <button className='b1' id="element" data-tooltip-content="Cleaning"><img src={cleanerPic} alt="" /></button>
        <button className='b2' id="element1" data-tooltip-content="Veterinarian"><img src={veterinarianPic} alt="" /></button>
        <button className='b3' id="element2" data-tooltip-content="Engineering"><img src={engineerPic} alt="" /></button>
        <ReactTooltip anchorId="element" style={style}/>
        <ReactTooltip anchorId="element1" style={style}/>
        <ReactTooltip anchorId="element2" style={style}/>
      </div>
      <div className='p-content2'>
        <button className='b4' id="element3" data-tooltip-content="Realestate"><img src={realestatePic} alt="" /></button>
        <button className='b5' id="element4" data-tooltip-content="Autoservices"><img src={automobilePic} alt="" /></button>
        <button className='b6' id="element5" data-tooltip-content="Autochargers"><img src={chargingPic} alt="" /></button>
        <ReactTooltip anchorId="element3" style={style}/>
        <ReactTooltip anchorId="element4" style={style}/>
        <ReactTooltip anchorId="element5" style={style}/>
      </div>
      <div className='p-content4' id="element6" data-tooltip-content="Personal page">
      <button onClick={previous} className="btn2">
          <img src={girlPic} alt="" /> 
          </button>
          <ReactTooltip anchorId="element6" style={style}/>
      </div>
    </div>
    <div><h1>This is my services page</h1>
          </div>
    </div>
  )
}

export default Services