import React from 'react'
import { useNavigate } from "react-router-dom";
import background from '../images/background.jpg'
import ShoppingPic from '../images/Shopping.png'
import heartPic from '../images/heart.png'
import womanPic from '../images/woman.png'
import servicePic from '../images/service.png'
import chatPic from '../images/chat.png'
import meetingPic from '../images/meeting.png'
import canoePic from '../images/canoe.png'
import emergencyPic from '../images/emergency.png'
import sportPic from '../images/sport.png'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'


function PersonalPage() {
  const navigate = useNavigate();
  function healthHandler() {
    navigate('/health')
  }
  function socialHandler() {
    navigate('/social')
  }
  function emergencyHandler() {
    navigate('/emergency')
  }
  function servicesHandler() {
    navigate('/services')
  }
  function beautyHandler() {
    navigate('/beauty')
  }
  function shoppingHandler() {
    navigate('/shopping')
  }
  function restHandler() {
    navigate('/rest')
  }
  function eventsHandler() {
    navigate('/events')
  }
  function sportHandler() {
    navigate('/sport')
  }
  const style={
    // backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backgroundColor: 'transparent',
    color: 'teal',
    fontSize: '24px',
    // width: '7%',
    // height: '44px',
    // borderRadius: '15px',
    // padding: '5px'
  }
  return (
    <div className='personal' style={{ backgroundImage: `url(${background})` }}>
    <div className='personal-content'>
      <div className='p-content1'>
        <button onClick={beautyHandler} className='b1' id="element" data-tooltip-content="Beauty"><img src={womanPic} alt="" /></button>
        <button onClick={shoppingHandler} className='b2' id="element1" data-tooltip-content="Shopping"><img src={ShoppingPic} alt="" /></button>
        <button onClick={healthHandler} className='b3' id="element2" data-tooltip-content="Health"><img src={heartPic} alt="" /></button>
        <ReactTooltip anchorId="element" style={style}/>
        <ReactTooltip anchorId="element1" style={style}/>
        <ReactTooltip anchorId="element2" style={style}/>
      </div>
      <div className='p-content2'>
        <button onClick={socialHandler} className='b4' id="element3" data-tooltip-content="Messengers"><img src={chatPic} alt="" /></button>
        <button onClick={servicesHandler} className='b5' id="element4" data-tooltip-content="Services"><img src={servicePic} alt="" /></button>
        <button onClick={eventsHandler} className='b6' id="element5" data-tooltip-content="Events"><img src={meetingPic} alt="" /></button>
        <ReactTooltip anchorId="element3" style={style}/>
        <ReactTooltip anchorId="element4" style={style}/>
        <ReactTooltip anchorId="element5" style={style}/>
      </div>
      <div className='p-content3'>
        <button onClick={restHandler} className='b7' id="element6" data-tooltip-content="Rest"><img src={canoePic} alt="" /></button>
        <button onClick={sportHandler} className='b8' id="element7" data-tooltip-content="Sport"><img src={sportPic} alt="" /></button>
        <button onClick={emergencyHandler} className='b9' id="element8" data-tooltip-content="Emergency"><img src={emergencyPic} alt="" /></button>
        <ReactTooltip anchorId="element6" style={style}/>
        <ReactTooltip anchorId="element7" style={style}/>
        <ReactTooltip anchorId="element8" style={style}/>
      </div>
    </div>
    <div><h1>This is my personal page</h1>
          </div>
    </div>
  )
}

export default PersonalPage