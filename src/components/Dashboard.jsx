import React, { useContext } from 'react';
// import Graphics from './Graphics';
import { AppContext } from '../App';

function Dashboard() { 

  const {data} = useContext(AppContext)
  return (
    <div>
      {data.baby.map((i) => (
            <div className='content'>
              <div className='age'> {i.age}</div>
              <div className='gender'> {i.gender}</div>
              <div className='months'> {i.months}</div>
            </div>
          ))}
    </div>
  )
}
export default Dashboard


