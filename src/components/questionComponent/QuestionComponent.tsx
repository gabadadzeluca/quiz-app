import { QuestionType } from "../../utils/QuestionType";
import { useState } from "react";

export default function QuestionComponent(props: {
  question:QuestionType;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number)=>void;
}){
  const [ correctAnswers, setCorrectAnswers ] = useState<number>(0);
  const { question, correct_answer, incorrect_answers, } = props.question;
  const { currentQuestionIndex, setCurrentQuestionIndex } = props;
  const answers = [...incorrect_answers, correct_answer];
  const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

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