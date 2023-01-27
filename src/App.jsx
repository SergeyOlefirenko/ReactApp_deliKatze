import './App.css';
import Home from './components/Home';
import Babyplanner from './components/Babyplanner';
import Dashboard from './components/Dashboard';
import Data from './components/Data';
import Login from './components/Login';
import Settings from './components/Settings';
import Babysitters from './components/Babysitters';
import Social from './components/Social';
import Emergency from './components/Emergency';
import Services from './components/Services';
import Beauty from './components/Beauty';
import Shopping from './components/Shopping';
import Rest from './components/Rest';
import Sport from './components/Sport';
import Events from './components/Events';
import Fitness from './components/Fitness';
import { Routes, Route, useNavigate} from 'react-router-dom';
import json from './data.json'
import kindergardensData from './kindergardens.json';
import { createContext } from 'react';
import { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PersonalPage from './components/PersonalPage';
import backgroundPic from "./images/background.jpg";
import Kindergardens from './components/Kindergardens';
import Health from './components/Health';
import KatzeLogoPic from './images/KatzeLogo.png'
import axios from "axios";


export const AppContext = createContext();
// Function to connect with json-server (start)
function App() {
 const [admin, setAdmin] = useState([])
 function fetching(){
  axios('https://jsonserver-bd7n.onrender.com/').then(i=> setAdmin(i.data))
 }
 useEffect(()=>{
  fetching()
 },[])
// Function to connect with json-server (finish)
 
  const [data, setData] = useState(json)
  const [kdata, setKdata] = useState(kindergardensData)
  const [resk, setResk] = useState()
  const [result, setResult] = useState()
  const [city, setCity] = useState()
  const [pagination, setPagination] = useState(0);
  const [showText, setShowText] = useState(false)

  const notify = (d) => toast(`Welcome! ${d}`);
  const userData = [
    {name: 'A', password: 'a'},
    {name: 'B', password: 'b'},
    {name: 'C', password: 'c'},
  ]
  const [user, setUser] = useState()
  const [users, setUsers] = useState(userData)
  const navigate = useNavigate()
 function login(e){
  e.preventDefault()
  console.log(e.target.username.value)
  let u = e.target.username.value
  let p = e.target.password.value
let foundUser = users.find(i=> i.name =u)
console.log(foundUser)
if(!foundUser){
  return
}
if(foundUser.password==p){
  setUser(foundUser)
  notify(foundUser.name)
}
 }
 useEffect(()=>{
  if(user){
    navigate('/personal')
  }
 }, [user])

 function home() {
  navigate('/home')
}

 function profile() {
  navigate('/login')
}
function logout() {
  // navigate('/login')
}
function settings() {
  navigate('/settings')
}
function wishlist() {
 
}

// Kindergardens

  return (
<AppContext.Provider value={{
      data,
      setData,
      result,
      setResult,
      pagination,
      setPagination,
      city,
      setCity,
      users,
      setUsers,
      kdata, 
      setKdata,
      resk, 
      setResk,
      admin, 
      setAdmin
     }}>
{/* <DndProvider backend={HTML5Backend}> */}
    <div className="App"> 
    <ToastContainer />
      <div style={{ backgroundImage: `url(${backgroundPic})` }}>
    </div>
  <div className='h-screen flex flex-col justify-between items-center bg-gray-800' data-theme="winter">

  <div className="navbar  bg-pink-500">
  <div className="flex-1">
    <a onClick={home} className="btn btn-ghost normal-case text-xl">deliKatze</a>
    <div className='logo'>
      <img src={KatzeLogoPic} alt="" />
      </div>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-40" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a onClick={profile} className="justify-between">
            Profile
            <span className="badge">Hello!</span>
          </a>
        </li>
        <li><a onClick={settings}>Settings</a></li>
        <li><a onClick={() => {setShowText(!showText)}}>Add to wishlist</a></li>
        {showText === true && <Dashboard data ={data} />} 
        <li><a onClick={logout}>Logout</a></li>
      </ul>
    </div>
  </div>
</div> 
<Routes>
  <Route path='/home' element={<Home />}/>
  <Route path='/login' element={<Login users={users} login={login}/>}/>
  <Route path='/personal' element={<PersonalPage user={user}/>}/>
  <Route path='/health' element={<Health />}/>
  <Route path='/settings' element={<Settings user={user}/>}/>
  <Route path='/dashboard' element={<Dashboard user={user}/>}/>
  <Route path='/babyplanner' element={<Babyplanner />}/>
  <Route path='/babysitters' element={<Babysitters />}/>
  <Route path='/kindergardens' element={<Kindergardens />}/>
  <Route path='/data' element={<Data />}/>
  <Route path='/social' element={<Social />}/>
  <Route path='/emergency' element={<Emergency />}/>
  <Route path='/services' element={<Services />}/>
  <Route path='/beauty' element={<Beauty />}/>
  <Route path='/shopping' element={<Shopping />}/>
  <Route path='/rest' element={<Rest />}/>
  <Route path='/sport' element={<Sport />}/>
  <Route path='/fitness' element={<Fitness />}/>
  <Route path='/events' element={<Events />}/>
 </Routes>
 
 <footer className="footer items-center p-4 bg-neutral text-neutral-content">
  <div className="items-center grid-flow-col">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
    <p>deliKatze © 2023 - All right reserved</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
    </a> 
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
  </div>
</footer>
  </div>  
    </div>
{/* </DndProvider> */}
      </AppContext.Provider>   
  );
}

export default App;

