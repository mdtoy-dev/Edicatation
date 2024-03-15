import React from "react";
import PlayerScoreInfo from "../components/PlayerScoreInfo";


function Score({ scoreCount }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-8 rounded-md shadow-md">
      <PlayerScoreInfo/>              
      </div>
      </div>

    
  );
}


export default Score;
