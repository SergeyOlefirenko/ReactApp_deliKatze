import React from 'react'
import { AppContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

function Kindergardens() {
    const {city, kdata, resk, setResk, users, admin} = useContext(AppContext)
    const navigate = useNavigate();
    {console.log(kdata)}
    {console.log()}
  return (
    <div> Here is available Kindergardens list for: {kdata.id}
    <div className='available'>
    Available:
    {console.log(kdata.kindergarden)}
    
    {resk && resk.list.map(i => <h1>{i}</h1>)}
      {/* Result of function to connect with json-server (start) */}
      {/* {admin && admin.map(i=> <h1>{i.name}</h1>)}
    {console.log(admin && admin.map(i=> <h1>{i.name}</h1>))} */}
    {/* Result of function to connect with json-server (finish) */}
    {/* <div>
        {kdata.kindergarden.find((i)=>(i)
        )}
    </div> */}

    {/* {kdata.map((i) => (
            <div className='content'>
              <div className='userName'> {i}</div>
            </div>
          ))} */}
    </div>
    
    </div>
  )
}

export default Kindergardens