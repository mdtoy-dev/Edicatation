import {useState,useEffect} from "react";

function PlayerScoreInfo() {

    
    var storedName = localStorage.getItem('name');
    var storedScore = parseInt(localStorage.getItem('score'));

    console.log(storedName);
    console.log(storedScore);

    return (
        <>
            <h4>Score Details</h4>

            
        </>
    );
}

export default PlayerScoreInfo;