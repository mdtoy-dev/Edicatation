import { useState, useEffect } from "react";
import questions from "../data/CountryCapitals.json";
import Score from "./Score";
import ProgressBar from "../components/progressBar";
import PlayerScoreInfo from "../components/PlayerScoreInfo";

/*Merge the correct and incorrect answers and shuffle's to display  */
const shuffleAnswer = (question) => {
  const answer = [question.correct, ...question.incorrect];

  for (let i = 0; i < answer.length; i++) {
    const j = Math.floor(Math.random() * i);
    const k = answer[i];
    answer[i] = answer[j];
    answer[j] = k;
  }

  return answer;
};

function Game() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [answers, setAnswer] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [scoreCount, setScoreCount] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  /*sets currentquestion and Answer everytime, based on questionIndex changes */
  useEffect(() => {
    const question = questions[currentQuestionIndex];
    setCurrentQuestion(question);
    setAnswer(shuffleAnswer(question));
  }, [currentQuestionIndex]);

  /* Function to  displaynextquestion,calculate score based on the answer and End the quiz*/
  const chooseAnswer = (answer) => {
    setSelectedAnswer(answer);

    if (answer === currentQuestion.correct) {
      setScoreCount(scoreCount + 1);
    }

    setTimeout(() => {
      const newIndex = currentQuestionIndex + 1;

      if (newIndex === questions.length) {
        setIsEnd(true);
        console.log("puzzle finished");
        console.log("score" + scoreCount);
      } else {
        setCurrentQuestionIndex(newIndex);
        setSelectedAnswer(null);
      }
    }, 100);
  };

  if (isEnd === true) {

  
    return <Score scoreCount={scoreCount} />
             
  }

  // Save the score value to localStorage
  localStorage.setItem("score", scoreCount);

  return (
    <>
    <div>
      <div className="flex flex-row items-center justify-center h-screen">
        <section className="max-w-lg bg-white shadow-md rounded-md p-6">
          <div className="text-center font-bold text-lg mb-2">
            Questions: {currentQuestionIndex + 1}/{questions.length} | Score:{" "}
            {scoreCount}
          </div>
          <div className="mb-4 ">
            <h4 className="text-xl font-bold mb-2">
              {currentQuestion.question}
            </h4>
            <ul className="mt-6">
              {answers.map((answer, index) => (
                <li className="mb-2 flex ms-4" key={index}>
                  <button
                    className="bg-cyan-600 hover:bg-orange-400 text-white  font-bold py-2 px-4 rounded"
                    onClick={() => chooseAnswer(answer)}
                  >
                    {answer}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
     </div>
     <ProgressBar scoreCount={scoreCount} />
    </div>
 
    </>
  );
}

export default Game;
