import { QuestionType } from "../../utils/QuestionType";
import { useState } from "react";
import FinalScreenComponent from "../finalScreenComponent/FinalScreenComponent";
import { ScoreObjectType } from "../../utils/ScoreObjectType";

export default function QuestionComponent(props: {
  username: string;
  question:QuestionType;
  currentQuestionIndex: number;
  handleQuestionChange: (index: number)=>void;
  finishGame: boolean;
}){
  const [ correctAnswers, setCorrectAnswers ] = useState<number>(0);
  const { question, correct_answer, incorrect_answers, } = props.question;
  const { currentQuestionIndex, handleQuestionChange, finishGame, username} = props;
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

  if(finishGame){
    return (
      <FinalScreenComponent
        currentQuestionIndex={currentQuestionIndex}
        correctAnswers={correctAnswers}
      />
    );
  }else{
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
}