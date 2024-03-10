import {useState,useEffect} from 'react';
import  questions from '../data/CountryCapitals.json';


const shuffleAnswer = question => {
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

    useEffect(()=>{
        const question = questions[currentQuestionIndex];
        setCurrentQuestion(question);
        setAnswer(shuffleAnswer(question));
    },[currentQuestion]);





return (<>
         <section>
            <div>               
                 {currentQuestionIndex+1}/{questions.length}
            </div>
            <div>
                <h4>{currentQuestion.question}</h4>
                <ul>
                {answers.map((answer, index) => (
                            <li key={index}>{answer}</li>
                        ))}
                </ul>

            </div>



         </section>

       </>)

}

export default Game;