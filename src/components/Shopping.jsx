import React from 'react'
import { useNavigate } from "react-router-dom";
import background from '../images/healthbg.png'
import cheesePic from '../images/cheese.png'
import shoesPic from '../images/shoes.png'
import dressPic from '../images/dress.png'
import bearPic from '../images/bear.png'
import smartphonePic from '../images/smartphone.png'
import diamondPic from '../images/diamond.png'
import girlPic from '../images/girl.png'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'
function Shopping() {
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
        <button className='b1' id="element" data-tooltip-content="Food stores"><img src={cheesePic} alt="" /></button>
        <button className='b2' id="element1" data-tooltip-content="Shoes stores"><img src={shoesPic} alt="" /></button>
        <button className='b3' id="element2" data-tooltip-content="Dress stores"><img src={dressPic} alt="" /></button>
        <ReactTooltip anchorId="element" style={style}/>
        <ReactTooltip anchorId="element1" style={style}/>
        <ReactTooltip anchorId="element2" style={style}/>
      </div>
      <div className='p-content2'>
        <button className='b4' id="element3" data-tooltip-content="Toys stores"><img src={bearPic} alt="" /></button>
        <button className='b5' id="element4" data-tooltip-content="Jewellery"><img src={diamondPic} alt="" /></button>
        <button className='b6' id="element5" data-tooltip-content="Electronic devices"><img src={smartphonePic} alt="" /></button>
        <ReactTooltip anchorId="element3" style={style}/>
        <ReactTooltip anchorId="element4" style={style}/>
        <ReactTooltip anchorId="element5" style={style}/>
      </div>
      <div className='p-content4'>
      <button onClick={previous} className="btn2" id="element6" data-tooltip-content="Personal page">
          <img src={girlPic} alt="" /> 
          </button>
          <ReactTooltip anchorId="element6" style={style}/>
      </div>
    </div>
    <div><h1>This is my shopping page</h1>
          </div>
    </div>
  )
}

export default Shopping