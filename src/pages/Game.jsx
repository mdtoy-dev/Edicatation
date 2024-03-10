import {useState,useEffect} from 'react';
import  questions from '../data/CountryCapitals.json';
import Score from './Score'

const shuffleAnswer = (question) => {
    const answer = [question.correct, ...question.incorrect];

    for (let i=0; i< answer.length;i++){
        const j= Math.floor(Math.random()*i);
        const k= answer[i];
        answer[i]=answer[j];
        answer[j]=k;
    }

    return answer;
}



function Game(){

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const[currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const[answers,setAnswer]=useState([]);
    const[selectedAnswer, setSelectedAnswer]= useState(null);
    const[scoreCount, setScoreCount]= useState(0);
    const[isEnd, setIsEnd]=useState(false);

    useEffect(()=>{
        const question = questions[currentQuestionIndex];
        setCurrentQuestion(question);
        setAnswer(shuffleAnswer(question));
    },[currentQuestionIndex]);

    const chooseAnswer= (answer) => {
      
        setSelectedAnswer(answer);

        if(answer === currentQuestion.correct){
            setScoreCount(scoreCount + 1);
        }

        setTimeout(() => {
          
            const newIndex = currentQuestionIndex + 1

            if(newIndex === questions.length){

              setIsEnd(true);
                console.log("puzzle finished");
                console.log("score"+scoreCount);
            }else{
                setCurrentQuestionIndex(newIndex);
                setSelectedAnswer(null);
            }
              
        }, 800);

    }

    if(isEnd=== true){

        return <Score scoreCount={scoreCount}/>

    }


return (<>
         <section>
            <div>               
                 {currentQuestionIndex+1}/{questions.length}
            </div>
            <div>
                <h4>{currentQuestion.question}</h4>
                <ul>
                {answers.map((answer, index) => (
                            <li key={index} onClick={()=>chooseAnswer(answer)}><button>{answer}</button></li>
                        ))}
                </ul>

            </div>

         </section>

       </>)

}

export default Game;
