import React from 'react'
import { useNavigate } from "react-router-dom";
import background from '../images/healthbg.png'
import whatsappPic from '../images/whatsapp.png'
import viberPic from '../images/viber.png'
import telegramPic from '../images/telegram.png'
import facebookPic from '../images/facebook.png'
import instagramPic from '../images/instagram.png'
import tictokPic from '../images/tictok.png'
import messengerPic from '../images/messenger.png'
import twitterPic from '../images/twitter.png'
import skypePic from '../images/skype.png'
import girlPic from '../images/girl.png'
function Social() {
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
        <button className='b1'><img src={whatsappPic} alt="" /></button>
        <button className='b2'><img src={viberPic} alt="" /></button>
        <button className='b3'><img src={telegramPic} alt="" /></button>
      </div>
      <div className='p-content2'>
        <button className='b4'><img src={facebookPic} alt="" /></button>
        <button className='b5'><img src={instagramPic} alt="" /></button>
        <button className='b6'><img src={tictokPic} alt="" /></button>
      </div>
      <div className='p-content3'>
        <button className='b7'><img src={messengerPic} alt="" /></button>
        <button className='b8'><img src={twitterPic} alt="" /></button>
        <button className='b9'><img src={skypePic} alt="" /></button>
      </div>
      <div className='p-content4'>
      <button onClick={previous} className="btn2">
          <img src={girlPic} alt="" /> 
          </button>
      </div>
    </div>
    <div><h1>This is my social page</h1>
          </div>
    </div>
  )
}

export default Social