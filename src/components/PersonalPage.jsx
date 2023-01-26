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
  return (
    <div className='personal' style={{ backgroundImage: `url(${background})` }}>
    <div className='personal-content'>
      <div className='p-content1'>
        <button onClick={beautyHandler} className='b1'><img src={womanPic} alt="" /></button>
        <button onClick={shoppingHandler} className='b2'><img src={ShoppingPic} alt="" /></button>
        <button onClick={healthHandler} className='b3'><img src={heartPic} alt="" /></button>
      </div>
      <div className='p-content2'>
        <button onClick={socialHandler} className='b4'><img src={chatPic} alt="" /></button>
        <button onClick={servicesHandler} className='b5'><img src={servicePic} alt="" /></button>
        <button onClick={eventsHandler} className='b6'><img src={meetingPic} alt="" /></button>
      </div>
      <div className='p-content3'>
        <button onClick={restHandler} className='b7'><img src={canoePic} alt="" /></button>
        <button onClick={sportHandler} className='b8'><img src={sportPic} alt="" /></button>
        <button onClick={emergencyHandler} className='b9'><img src={emergencyPic} alt="" /></button>
      </div>
    </div>
    <div><h1>This is my personal page</h1>
          </div>
    </div>
  )
}

export default PersonalPage