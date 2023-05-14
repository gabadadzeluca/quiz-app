import { QuestionType } from "../../utils/QuestionType";

export default function QuestionComponent(props: {question:QuestionType}){
  const { question, correct_answer, incorrect_answers, } = props.question;
  const answers = [...incorrect_answers, correct_answer];
  const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
  return (
    <div>
      <p>{atob(question)}</p>
      <div>
        {shuffledAnswers.map((answer) => 
          <li>{atob(answer)}</li>
        )}
      </div>
    </div>
  )
}