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
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'
function Social() {
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
        <button className='b1' id="element" data-tooltip-content="WhatsApp"><img src={whatsappPic} alt="" /></button>
        <button className='b2' id="element1" data-tooltip-content="Viber"><img src={viberPic} alt="" /></button>
        <button className='b3' id="element2" data-tooltip-content="Telegram"><img src={telegramPic} alt="" /></button>
        <ReactTooltip anchorId="element" style={style}/>
        <ReactTooltip anchorId="element1" style={style}/>
        <ReactTooltip anchorId="element2" style={style}/>
      </div>
      <div className='p-content2'>
        <button className='b4' id="element3" data-tooltip-content="Facebook"><img src={facebookPic} alt="" /></button>
        <button className='b5' id="element4" data-tooltip-content="Instagram"><img src={instagramPic} alt="" /></button>
        <button className='b6' id="element5" data-tooltip-content="TikTok"><img src={tictokPic} alt="" /></button>
        <ReactTooltip anchorId="element3" style={style}/>
        <ReactTooltip anchorId="element4" style={style}/>
        <ReactTooltip anchorId="element5" style={style}/>
      </div>
      <div className='p-content3'>
        <button className='b7' id="element6" data-tooltip-content="Messenger"><img src={messengerPic} alt="" /></button>
        <button className='b8' id="element7" data-tooltip-content="Twitter"><img src={twitterPic} alt="" /></button>
        <button className='b9' id="element8" data-tooltip-content="Skype"><img src={skypePic} alt="" /></button>
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
    <div><h1>This is my social page</h1>
          </div>
    </div>
  )
}

export default Social