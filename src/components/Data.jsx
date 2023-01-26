import React from 'react'
import { AppContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import babyPic from '../images/baby.png'
import pdfPic from '../images/pdf.png'
import housePic from '../images/house.png'
import babylightPic from '../images/babylight.png'
import background from '../images/background.jpg'


function Data() {
  const dataList = []
  function printing (){
    window.print()
  }
//   const printing = () => {
//     result && result.months.map(i =>{
//       dataList.push(i)
//       console.log(dataList);
//       dataList.map(i=>{
//         console.log(i);
//       })
//       fetch(i).then(response => {
//         response.blob(i).then(blob => {
//             // Creating new object of PDF file
//             // const fileURL = window.URL.createObjectURL(blob);
//             const fileURL = window.URL.createObjectURL(blob);
//             // Setting various property values
//             let alink = document.createElement('a');
//             alink.href = fileURL;
//             alink.download = i;
//             alink.click();
//         })
//     })
//       // return i
//     })
   
//     // using Java Script method to get PDF file

//     // fetch('SamplePDF.pdf').then(response => {
//     //     response.blob(i).then(blob => {
//     //         // Creating new object of PDF file
//     //         // const fileURL = window.URL.createObjectURL(blob);
//     //         const fileURL = window.URL.createObjectURL(blob);
//     //         // Setting various property values
//     //         let alink = document.createElement('a');
//     //         alink.href = fileURL;
//     //         alink.download = 'SamplePDF.pdf';
//     //         alink.click();
//     //     })
//     // })
// }





  const {data, result, setPagination} = useContext(AppContext)
  const navigate = useNavigate();
  function previous() {
    setPagination((i) => (i -= 1));
    navigate('/babyplanner')
  }
  function next() {
    setPagination((i) => (i += 1));
    navigate('/home')
  }

  return (
    <div className='data-bg' style={{ backgroundImage: `url(${background})` }}> 
    <div className="data">
    <div className='image'>
      <img src={babyPic} alt="" /> 
    </div>
      <div className="table">
          <tr>
            <td className="block">Months of conception</td>
          </tr>
          <tr>
            <td className="block">{result && result.months.map(i => <h1>{i}</h1>)}</td>
          </tr>
          <tr>
      </tr>
      </div>
      <div className="buttons">  
    <button onClick={previous} className="btn2">
          <img src={babylightPic} alt="" /> 
          </button>
          <button onClick={printing} type="submit" className="btn2">
          <img src={pdfPic} alt="" />
          </button>
          <button onClick={next} className="btn2">
          <img src={housePic} alt="" />
          </button>
          </div>
    </div>
        </div>
  )
}

export default Data