import React from 'react'
import { useNavigate } from "react-router-dom";
import background from '../images/healthbg.png'
import dietologyPic from '../images/dietology.png'
import hairPic from '../images/hair.png'
import nailsPic from '../images/nails.png'
import makeupPic from '../images/makeup.png'
import girlPic from '../images/girl.png'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'
function Beauty() {
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
        <button className='b1' id="element" data-tooltip-content="Dietology"><img src={dietologyPic} alt="" /></button>
        <button className='b2' id="element1" data-tooltip-content="Hair stylists"><img src={hairPic} alt="" /></button>
        <ReactTooltip anchorId="element" style={style}/>
        <ReactTooltip anchorId="element1" style={style}/>
      </div>
      <div className='p-content2'>
        <button className='b3' id="element2" data-tooltip-content="Nail services"><img src={nailsPic} alt="" /></button>
        <button className='b4' id="element3" data-tooltip-content="Makeup"><img src={makeupPic} alt="" /></button>
        <ReactTooltip anchorId="element2" style={style}/>
        <ReactTooltip anchorId="element3" style={style}/>
      </div>
      <div className='p-content4'>
      <button onClick={previous} className="btn2" id="element4" data-tooltip-content="Personal page">
          <img src={girlPic} alt="" /> 
          </button>
          <ReactTooltip anchorId="element4" style={style}/>
      </div>
    </div>
    <div><h1>This is my services page</h1>
          </div>
    </div>
  )
}

export default Beauty