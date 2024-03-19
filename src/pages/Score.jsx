function ScoreList() {
    const finalScores = JSON.parse(localStorage.getItem("finalScore"))
    const subjectList = JSON.parse(localStorage.getItem("subject"))
    
    const list = subjectList.map((subject, index) => {
        return {
        subject: subject,
        score: finalScores[index]
        }
        
      });

      console.log(list)

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="h-2/3 w-2/3 bg-gray-100 p-8 text-center rounded-md shadow-md">
                    <h1 className="font-bold text-3xl text-orange-600 sm:mb-5">Your Scores</h1>
                    <ul className="p-6">
                        {list.map((listItem, index) => (
                            <li className="font-semibold text-xl text-cyan-600">{listItem.subject} : {listItem.score}</li>
                        ))}
                    </ul>
            </div>
        </div>
    )
}

export default ScoreList