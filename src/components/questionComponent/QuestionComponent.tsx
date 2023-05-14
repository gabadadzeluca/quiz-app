import { QuestionType } from "../../utils/QuestionType";

export default function QuestionComponent(props: {question:QuestionType}){
  const { question, correct_answer, incorrect_answers, } = props.question;
  const answers = [...incorrect_answers, correct_answer];
  console.log("ANSWERS: ", answers);
  return (
    <div>
      <p>{atob(question)}</p>
      <div>
        {answers.map((answer) => 
          <li>{atob(answer)}</li>
        )}
      </div>
    </div>
  )
}