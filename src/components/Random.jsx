import { useState, useEffect } from "react"
import Score from "../pages/Score"
import ProgressBar from "./progressBar"
function Random() {
  const [questionsData, setQuestionsData] = useState({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [answers, setAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [scoreCount, setScoreCount] = useState(0)
  const [isEnd, setIsEnd] = useState(false)
  useEffect(() => {
    // Fetch questions from the API
    fetch("http://localhost:8888/api/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestionsData(data)
        // Set current question and answers
        setCurrentQuestion(data.questions[currentQuestionIndex])
        setAnswers(shuffleAnswer(data.questions[currentQuestionIndex]))
      })
      .catch((error) => console.error("Error fetching questions:", error))
  }, [currentQuestionIndex])
  // Function to merge and shuffle answers
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
  const chooseAnswer = (answer) => {
    setSelectedAnswer(answer)
    if (answer === currentQuestion.correct) {
      setScoreCount(scoreCount + 1)
      localStorage.setItem("score", scoreCount + 1)
    }
    setTimeout(() => {
      const newIndex = currentQuestionIndex + 1
      if (newIndex === 10) {
        setIsEnd(true)
        console.log("puzzle finished")
        console.log("score" + scoreCount)
      } else {
        setCurrentQuestionIndex(newIndex)
        setSelectedAnswer(null)
      }
    }, 100)
  }
  if (isEnd === true) {
    return <Score scoreCount={scoreCount} />
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-md p-6">
        <div className="text-center font-bold text-lg mb-2">
          {/* Questions: {currentQuestionIndex + 1}/{questionsData.questions.length} */}
        </div>
        <div className="mb-4">
          <h4 className="text-2xl text-cyan-600 font-bold text-center mb-2">
            {currentQuestion && currentQuestion.question}
          </h4>
          <ul className="mt-6">
            {answers.map((answer, index) => (
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
        <ProgressBar scoreCount={scoreCount} />
      </div>
    </div>
  )
}
export default Random
