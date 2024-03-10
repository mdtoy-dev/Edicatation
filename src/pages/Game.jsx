import {useState,useEffect} from 'react';



function Game({questions}){

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const[currentQuestion, setCurrentQuestion] = useState(questions[0]);

    useEffect(()=>{
        const question = questions[currentQuestionIndex];
        setCurrentQuestion(question);
    },[currentQuestion]);



return (<>
         <section>
            

         </section>

       </>)




}

export default Game;