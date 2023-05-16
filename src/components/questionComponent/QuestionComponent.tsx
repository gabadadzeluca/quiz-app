import { QuestionType } from "../../utils/QuestionType";
import { useState } from "react";

export default function QuestionComponent(props: {
  question:QuestionType;
  currentQuestionIndex: number;
  handleQuestionChange: (index: number)=>void;
  finishGame: boolean;
}){
  const [ correctAnswers, setCorrectAnswers ] = useState<number>(0);
  const { question, correct_answer, incorrect_answers, } = props.question;
  const { currentQuestionIndex, handleQuestionChange, finishGame} = props;
  const answers = [...incorrect_answers, correct_answer];
  const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
  const handleAnswer = (selectedAnswer: string) =>{
    if(selectedAnswer === correct_answer){
      console.log("CORRECT!");
      setCorrectAnswers(correctAnswers+1);
    }else{
      console.log("INCORRECT!!!")
    }
    handleQuestionChange(currentQuestionIndex + 1);
  }
  return (
    <div>
      <p>{atob(question)}</p>
      <div>
        {shuffledAnswers.map((answer) => 
          <li onClick={() => handleAnswer(answer)}>{atob(answer)}</li>
        )}
      </div>
    </div>
  )
}