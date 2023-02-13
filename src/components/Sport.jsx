import React from 'react'
import { useNavigate } from "react-router-dom";
import background from '../images/healthbg.png'
import fitnessPic from '../images/fitness.png'
import runningPic from '../images/running.png'
import bicyclePic from '../images/bicycle.png'
import athletePic from '../images/athlete.png'
import tennisPic from '../images/tennis.png'
import basketballPic from '../images/basketball.png'
import windsurfingPic from '../images/windsurfing.png'
import surfingPic from '../images/surfing.png'
import waterpoloPic from '../images/waterpolo.png'
import girlPic from '../images/girl.png'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'
function Sport() {
  const navigate = useNavigate();
  function previous() {
    navigate('/personal')
  }
  function fitnessHandler() {
    navigate('/fitness')
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
        <button onClick={fitnessHandler} className='b1' id="element" data-tooltip-content="Fittness centres"><img src={fitnessPic} alt="" /></button>
        <button className='b2' id="element1" data-tooltip-content="Run"><img src={runningPic} alt="" /></button>
        <button className='b3' id="element2" data-tooltip-content="Cycling"><img src={bicyclePic} alt="" /></button>
        <ReactTooltip anchorId="element" style={style}/>
        <ReactTooltip anchorId="element1" style={style}/>
        <ReactTooltip anchorId="element2" style={style}/>
      </div>
      <div className='p-content2'>
        <button className='b4' id="element3" data-tooltip-content="Martial arts"><img src={athletePic} alt="" /></button>
        <button className='b5' id="element4" data-tooltip-content="Tennis"><img src={tennisPic} alt="" /></button>
        <button className='b6' id="element5" data-tooltip-content="Basketball"><img src={basketballPic} alt="" /></button>
        <ReactTooltip anchorId="element3" style={style}/>
        <ReactTooltip anchorId="element4" style={style}/>
        <ReactTooltip anchorId="element5" style={style}/>
      </div>
      <div className='p-content3'>
        <button className='b7' id="element6" data-tooltip-content="Windsurfing"><img src={windsurfingPic} alt="" /></button>
        <button className='b8' id="element7" data-tooltip-content="Surfing"><img src={surfingPic} alt="" /></button>
        <button className='b9' id="element8" data-tooltip-content="Waterpolo"><img src={waterpoloPic} alt="" /></button>
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
    <div><h1>This is my sport page</h1>
          </div>
    </div>
  )
}

export default Sport