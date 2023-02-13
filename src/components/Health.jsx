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
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'
function Health() {
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
        <button className='b1' id="element" data-tooltip-content="Dentist"><img src={dentistPic} alt="" /></button>
        <button className='b2' id="element1" data-tooltip-content="Ginecology"><img src={ginecologyPic} alt="" /></button>
        <button className='b3' id="element2" data-tooltip-content="Pregnancy"><img src={pregnancyPic} alt="" /></button>
        <ReactTooltip anchorId="element" style={style}/>
        <ReactTooltip anchorId="element1" style={style}/>
        <ReactTooltip anchorId="element2" style={style}/>
      </div>
      <div className='p-content2'>
        <button className='b4' id="element3" data-tooltip-content="Cardio"><img src={cardioPic} alt="" /></button>
        <button className='b5' id="element4" data-tooltip-content="Kidney"><img src={kidneyPic} alt="" /></button>
        <button className='b6' id="element5" data-tooltip-content="Liver"><img src={liverPic} alt="" /></button>
        <ReactTooltip anchorId="element3" style={style}/>
        <ReactTooltip anchorId="element4" style={style}/>
        <ReactTooltip anchorId="element5" style={style}/>
      </div>
      <div className='p-content3'>
        <button className='b7' id="element6" data-tooltip-content="Hospital"><img src={hospitalPic} alt="" /></button>
        <button className='b8' id="element7" data-tooltip-content="Psychologist"><img src={psychologistPic} alt="" /></button>
        <button className='b9' id="element8" data-tooltip-content="Notebook"><img src={notebookPic} alt="" /></button>
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
    <div><h1>This is my health page</h1>
          </div>
    </div>
  )
}

export default Health