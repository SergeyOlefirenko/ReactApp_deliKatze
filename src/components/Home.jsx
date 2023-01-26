import React from 'react'
import { AppContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import background from '../images/background.jpg'
import katzePic from '../images/katze.png'
import babylightPic from '../images/babylight.png'
import babysitterPic from '../images/babysitter.png'
import kindergardenPic from '../images/kindergarden.png'
import settingsPic from '../images/settings.png'

function Home() {
  const {setPagination, setCity} = useContext(AppContext)
  const { kdata, setKdata, setResk, data, setResult, admin, setAdmin} = useContext(AppContext);
  const navigate = useNavigate();

  function previous() {
    setPagination((i) => (i -= 1));
    navigate('/settings')
    // acsess to settings
  }
  function next() {
    setPagination((i) => (i += 1));
    navigate('/babyplanner')
  }
  function submitLocationHandler(e){
    e.preventDefault();
    if (
      e.target.citySelect.value == "Select your location" 
    ) 
    {
      alert("Please select location");
      return;
    }
    const foundCity = e.target.citySelect.value
    
    {
      if (foundCity){
      setCity(foundCity)
      navigate('/babysitters')
      return foundCity
    }
      
    }
  }

//   function kindergardenLocationHandler(e){
//     e.preventDefault();
//     if (
//       e.target.citySelect.value == "Select your location" 
//     ) 
//     {
//       alert("Please select location");
//       return;
//     }
//     const foundCity = e.target.citySelect.value
   
//     {
//       if (foundCity){
//       setCity(foundCity)
//       navigate('/kindergardens')
//       return foundCity
//     }
//   }
// }

function kindergardenLocationHandler(e) {
  e.preventDefault();
  if (
    e.target.citySelect.value == "Select your location" 
  ) {
    alert("Please select location");
    return;
  }
  const id = e.target.citySelect.value
  // navigate('/kindergardens')
  console.log(id);
  const foundId = kdata.kindergarden.find(i => { 
    console.log(i.id);
    console.log(i.list[0]);
    return i.id == id && i.list
  })

  const foundlist = kdata.kindergarden.find(i => { 
    console.log(i.id);
    console.log(i.list[0]);
    return i.list
  })
  // if (foundlist){
  //   setKdata(foundlist)
  // }
  
  if (foundId){
    // setResk(foundlist)
    setKdata(foundId)
    navigate('/kindergardens')
  }
 
}
   
  return (
    <div>

    <div className='home' style={{ backgroundImage: `url(${background})` }}>
       <div className='home-image'>
        <img src={katzePic} alt="" /> 
    </div>
      <div className="home-buttons"> 
      <div className='b-change'> 
          <button onClick={previous} className="btn2">
          <img src={settingsPic} alt="" /> 
          </button>
          </div>
          <form onSubmit={submitLocationHandler}>
          <div className="choice-form">
          <div className="city-choice">
            <select
              name="citySelect"
              className="select select-info w-full max-w-xs"
            >
              <option disabled selected>
                Select your location
              </option>
              <option>Munchen</option>
              <option>Nurnberg</option>
              <option>Berlin</option>
              <option>Hamburg</option>
              <option>Frankfurt</option>
            </select>
          </div>
          </div>
          <button type="submit" className="btn2">
          <img src={babysitterPic} alt="" /> 
          <p>Available babysitters</p>
          </button>
        </form>

        <form onSubmit={kindergardenLocationHandler}>
          <div className="choice-form">
          <div className="city-choice">
            <select
              name="citySelect"
              className="select select-info w-full max-w-xs"
            >
              <option disabled selected>
                Select your location
              </option>
              <option>Munchen</option>
              <option>Nurnberg</option>
              <option>Berlin</option>
              <option>Hamburg</option>
              <option>Frankfurt</option>
              <option>Bonn</option>
            </select>
          </div>
          </div>
          <button type="submit" className="btn2">
          <img src={kindergardenPic} alt="" /> 
          <p>Available kindergardens</p>
          </button>
        </form>
         <div className='b-change2'>
          <button onClick={next} className="btn2">
          <img src={babylightPic} alt="" /> 
          </button>
         </div>
          </div>
    </div>
    </div>
  )
}

export default Home