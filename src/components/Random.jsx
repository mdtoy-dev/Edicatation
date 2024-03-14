import React, { useState, useEffect } from "react"

function Random() {
  const [questionsData, setQuestionsData] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswer] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [scoreCount, setScoreCount] = useState(0)
  const [isEnd, setIsEnd] = useState(false)

  /* Fetch questions data from the server */
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/.netlify/functions/api/questions")
        if (!response.ok) {
          throw new Error("Failed to fetch questions data")
        }
        const data = await response.json()
        setQuestionsData(data)
      } catch (error) {
        console.error("Error fetching questions data:", error)
      }
    }
    fetchQuestions()
  }, [])

  /* Function to merge correct and incorrect answers and shuffle them */
  const shuffleAnswer = (question) => {
    const answer = [question.correct, ...question.incorrect]
    for (let i = 0; i < answer.length; i++) {
      const j = Math.floor(Math.random() * i)
      const k = answer[i]
      answer[i] = answer[j]
      answer[j] = k
    }
    return answer
  }

  /* Function to handle selecting an answer */
  const chooseAnswer = (answer) => {
    setSelectedAnswer(answer)
    if (answer === questionsData.questions[currentQuestionIndex].correct) {
      setScoreCount(scoreCount + 1)
      localStorage.setItem("score", scoreCount + 1)
    }
    setTimeout(() => {
      const newIndex = currentQuestionIndex + 1
      if (newIndex === questionsData.questions.length) {
        setIsEnd(true)
        console.log("puzzle finished")
        console.log("score" + scoreCount)
      } else {
        setCurrentQuestionIndex(newIndex)
        setSelectedAnswer(null)
      }
    }, 100)
  }

  if (!questionsData) {
    return <div>Loading...</div>
  }

  if (isEnd === true) {
    return <Score scoreCount={scoreCount} />
  }

  const currentQuestion = questionsData.questions[currentQuestionIndex]
  const shuffledAnswers = shuffleAnswer(currentQuestion)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-md p-6">
        <div className="text-center font-bold text-lg mb-2">
          Questions: {currentQuestionIndex + 1}/{questionsData.questions.length}
        </div>
        <div className="mb-4">
          <h4 className="text-2xl text-cyan-600 font-bold text-center mb-2">
            {currentQuestion.question}
          </h4>
          <ul className="mt-6">
            {shuffledAnswers.map((answer, index) => (
              <li className="mb-2" key={index}>
                <button
                  className="w-full h-12 bg-cyan-600 hover:bg-orange-400 text-white flex items-center justify-center font-bold py-2 px-4 rounded"
                  onClick={() => chooseAnswer(answer)}
                >
                  {answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Include ProgressBar component */}
      </div>
    </div>
  )
}

export default Random
