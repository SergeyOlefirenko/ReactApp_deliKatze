import React from 'react'
import { useNavigate } from "react-router-dom";
import {auth, provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import { async } from '@firebase/util';
function Login({login, users}) {
  const navigate = useNavigate();
  // navigate('/personal')
  const signInWithGoogle = async ()=>{
    const result = await signInWithPopup(auth, provider)
    console.log(result);
  }
  return (
    <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Login</h2>
    <p>Enter your login and password to continue or sign in with Google to continue</p>
    <form onSubmit={login}>
        <input type='text' name='username'
        placeholder='type here'
        className='input input-bordered w-full max-w-xs'/>
        <input name="password" 
        type='password'
        placeholder='Type here'
        className='input input-bordered w-full max-w-xs'/>
      <button className="btn">Login</button> 
      <button onClick={signInWithGoogle} className="btn">Sign In with Google</button>
      </form>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  )
}

export default Login