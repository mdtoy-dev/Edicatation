import {useState,useEffect} from "react";





function PlayerScoreInfo({lName,score}) {


    let finalInfo={name:lName,
                     score:score};

    console.log(finalInfo);

    useEffect(() => {
     
        localStorage.setItem("finalInfo", JSON.stringify(finalInfo));
       
    }, []);

    useEffect(() => {
        
        localStorage.setItem("finalInfo", JSON.stringify(finalInfo));
    }, [finalInfo]);

   const retrievedObject = JSON.parse(localStorage.getItem('finalInfo'));

    return (
        <>
            <h4>Score Details</h4>
            <p>{finalInfo.name}: {finalInfo.score}</p>
        </>
    );
}

export default PlayerScoreInfo;