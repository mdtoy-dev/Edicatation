import {useState,useEffect} from 'react';
import  questions from '../data/CountryCapitals.json';



function Game(){

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const[currentQuestion, setCurrentQuestion] = useState(questions[0]);

    useEffect(()=>{
        const question = questions[currentQuestionIndex];
        setCurrentQuestion(question);
    },[currentQuestion]);



return (<>
         <section>
            <div>               
                 {currentQuestionIndex+1}/{questions.length}
            </div>
            <div>
                <h4>{currentQuestion.question}</h4>
            </div>


         </section>

       </>)




}

export default Game;