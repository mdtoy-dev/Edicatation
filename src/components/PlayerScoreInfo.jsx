
const scoreList = []

function PlayerScoreInfo() {

    //Reading the data from Local Storage.
    var storedName = localStorage.getItem('name');
    var storedScore = parseInt(localStorage.getItem('quizScore'));
    
    scoreList.push(localStorage.getItem('quizScore'));
    localStorage.setItem("finalScore", JSON.stringify(scoreList));


    
    return (
        <>
         <div className="text-4xl font-bold mb-4">
                  Hi {storedName}!...
         </div>
         <div className="text-3xl text-center font-extrabold text-blue-500">
               Your Score: {storedScore}
         </div>
        
        </>
    );
}

export default PlayerScoreInfo;