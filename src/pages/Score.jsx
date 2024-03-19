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
            <div className="h-2/3 w-2/3 bg-white p-8 text-center rounded-md shadow-md">
                    <h1 className="font-bold text-3xl text-orange-700 sm:mb-5">Your Scores</h1>

                        {list.map((listItem, index) => (
                            <div className="p-6 grid grid-cols-2">
                            <div className="grid grid-cols-1">
                                <div className="font-semibold text-xl text-orange-600">
                                {listItem.subject}
                                <hr className="shadow shadow-cyan-500" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1">
                            <div className="font-semibold text-xl text-cyan-600">
                            {listItem.score}
                            <hr className="shadow shadow-orange-500" />
                            </div>
                        </div>
                        </div>
                        ))}
                    
            </div>
        </div>
    )
}

export default ScoreList