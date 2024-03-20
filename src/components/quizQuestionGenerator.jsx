import { useState, useEffect } from "react";

import questions from "../data/CountryCapitals.json";
import Score from "./ScoreComp";
import ProgressBar from "./progressBar";
import { useParams } from "react-router-dom";



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

function quizQuestionGenerator() {


 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswer] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [scoreCount, setScoreCount] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  
  let { type } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState({});
 

  /*sets currentquestion and Answer everytime, based on questionIndex changes */
  useEffect(() => {
       (async () => {
        const value = (await import(`../data/${type}.json`));
        const question = value.default[currentQuestionIndex];
        setCurrentQuestion(question);
        setAnswer(shuffleAnswer(question));

    })();
    
  }, [currentQuestionIndex]);
    

  /* Function to  displaynextquestion,calculate score based on the answer and End the quiz*/
  const chooseAnswer = (answer) => {
    setSelectedAnswer(answer);

    if (answer === currentQuestion.correct) {

      setScoreCount(scoreCount + 1);

      localStorage.setItem("quizScore", scoreCount+1);
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
  
    
  return (
    <div className=" bg-[url('src/assets/quizBg.jpg')] bg-cover h-screen">
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-md p-6">
        <div className="text-center font-bold text-lg mb-2">
          Questions: {currentQuestionIndex + 1}/{questions.length}
        </div>
        <div className="mb-4">
          <h4 className="text-2xl text-cyan-600 font-bold text-center mb-2">
            {currentQuestion.question}
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
    </div>
  );
}

export default quizQuestionGenerator;
