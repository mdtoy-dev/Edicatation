import {useState,useEffect} from "react";

function PlayerScoreInfo() {

    //Reading the data from Local Storage.
    var storedName = localStorage.getItem('name');
    var storedScore = parseInt(localStorage.getItem('score'));

    
    return (
        <>
         <div className="text-4xl font-bold mb-4">
                  Hi {storedName}!...
         </div>
         <div className="text-3xl text-center font-extrabold text-blue-500">
               YourScore:{storedScore}
         </div>
        
        </>
    );
}

export default PlayerScoreInfo;