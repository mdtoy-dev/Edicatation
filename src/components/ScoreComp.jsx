import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Confetti from 'react-confetti'


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

          <Confetti />
    {showButton ? (<div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-md shadow-md w-full p-3 m-3 sm:h-1/3 sm:w-1/3 sm:p-8">
    
      <div className="text-4xl font-bold mb-4 flex justify-center text-cyan-600">
                  Hi {storedName}!
         </div>
         <div className="text-xl flex justify-center font-extrabold text-orange-600 sm:mb-6 sm:mt-6">
               Your Score: {storedScore}
         </div> 
         <button
        type="submit"
        onClick={saveScore}
        className="m-auto my-2 py-2 px-10  flex justify-center bg-orange-500 hover:bg-cyan-700 text-cyan-50 font-bold rounded"
        >
          Save Score
        </button>         
      </div>
    </div>) : (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-md shadow-md w-full p-3 m-3 sm:h-1/3 sm:w-1/3 sm:p-8">
        <p className="sm:text-2xl sm:mb-8 sm:mt-10 font-semibold mb-4 flex justify-center text-cyan-600">Thanks for saving your score.</p>   
        <Link
        to="/explore"
        className="m-auto my-2 mx-10 flex justify-center bg-orange-500 hover:bg-cyan-700 text-cyan-50 font-bold py-2 px-10 rounded"
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
