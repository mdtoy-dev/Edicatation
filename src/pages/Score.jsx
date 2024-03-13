import React from "react";
import PlayerScoreInfo from "../components/PlayerScoreInfo";

function Score({ scoreCount }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-8 rounded-md shadow-md">
        <div className="text-4xl font-bold mb-4">
          Congratulations, you scored
       <PlayerScoreInfo/>              
      </div>
        <div className="text-6xl text-center font-extrabold text-blue-500">
          {scoreCount} Points
      </div>
      </div>
    </div>
  );
}


export default Score;
