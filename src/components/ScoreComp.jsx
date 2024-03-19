import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const scoreList = []

function Score({ scoreCount }) {

  var storedName = localStorage.getItem('name');
  var storedScore = parseInt(localStorage.getItem('quizScore'));
  const [showButton, setShowButton] = useState(true);
  

  function saveScore() {

    scoreList.push(localStorage.getItem('quizScore'));
    localStorage.setItem("finalScore", JSON.stringify(scoreList));
    setShowButton(false);

  }

  
  return (
  <div>
    {showButton ? (<div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-8 rounded-md shadow-md">
    
      <div className="text-4xl font-bold mb-4">
                  Hi {storedName}!...
         </div>
         <div className="text-3xl text-center font-extrabold text-blue-500">
               Your Score: {storedScore}
         </div> 
         <button
        type="submit"
        onClick={saveScore}
        className="m-auto my-2 bg-orange-500 hover:bg-cyan-700 text-cyan-50 font-bold py-2 px-10 rounded"
        >
          Save Score
        </button>         
      </div>
    </div>) : (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-8 rounded-md shadow-md">
        <p className="sm:text-xl font-semibold mb-4 text-center text-cyan-600">Thanks for saving your score.</p>   
        <Link
        to="/explore"
        className="m-auto my-2 bg-orange-500 justify-center hover:bg-cyan-700 text-cyan-50 font-bold py-2 px-10 rounded"
        >
          Discover more topics
          </Link>
      </div> 
    </div>
    )
    }
  </div>
  );
}


export default Score;
