import React from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
import background from '../images/technology.jpg'
import shuttlePic from '../images/shuttle.png'
import housePic from '../images/house.png'
import babylightPic from '../images/babylight.png'

function Babyplanner() {
  const { data, setResult, setPagination } = useContext(AppContext);
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    if (
      e.target.genderSelect.value == "Select baby's gender you wish" ||
      e.target.ageSelect.value == "Select your age"
    ) {
      alert("Please fill the gender and age options");
      return;
    }
    const gender = e.target.genderSelect.value
    const age = e.target.ageSelect.value

    const found = data.baby.find(i => { 
      return i.age == age && i.gender == gender
    })
    if (found){
      setResult(found)
      navigate('/data')
    }
    
  }
  function previous() {
    setPagination((i) => (i -= 1));
    navigate('/home')
  }
  function next() {
    setPagination((i) => (i += 1));
    navigate('/data')
  }
  

  return (
    <div className="">
    <div className="card w-96 text-primary-content">
      <div className='plannerstyle' style={{ backgroundImage: `url(${background})` }}>
      <div className="card-body">
        <h2 className="card-title">Babyplanner</h2>
        <p>Note: Your age should be in range 18-40 years</p>
        <form onSubmit={submitHandler}>
          <div className="choice-form">
          <div className="gender-choice">
            <select
              name="genderSelect"
              className="select select-info w-full max-w-xs"
            >
              <option disabled selected>
                Select baby's gender you wish
              </option>
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>
          <div className="age-choice">
            <select
              name="ageSelect"
              className="select select-info w-full max-w-xs"
            >
              <option disabled selected>
                Select your age
              </option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
              <option>32</option>
              <option>33</option>
              <option>34</option>
              <option>35</option>
              <option>36</option>
              <option>37</option>
              <option>38</option>
              <option>39</option>
              <option>40</option>
            </select>
          </div>
          </div>
          <div className="buttons">  
          <button onClick={previous} className="btn2">
          <img src={housePic} alt="" />
          </button>
          <button type="submit" className="btn2">
          <img src={shuttlePic} alt="" /> 
          </button>
          <button onClick={next} className="btn2">
          <img src={babylightPic} alt="" /> 
          </button>
          </div>
        </form>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Babyplanner;
