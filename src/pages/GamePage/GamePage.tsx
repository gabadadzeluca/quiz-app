import { useContext, useEffect, useState } from 'react'
import { Context } from '../../App'
import axios from 'axios';

type QuestionType = {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}

export default function GamePage(){
  const { 
    username,
    number,
    categoryId,
    difficulty
  } = useContext(Context);

  const API_URL = `https://opentdb.com/api.php?amount=${number}&category=${categoryId}&difficulty=${difficulty}&encode=base64`;
  const[questions, setQuestions] = useState<QuestionType[]|[]>([]);
  console.log("questions:", questions);

  useEffect(()=>{
    fetchQuestions();
  }, []);
  const fetchQuestions =  async () =>{
    const response = await axios.get(API_URL);
    console.log(response.data);
    setQuestions(response.data?.results);
  } 
  return (
    <div>
      {questions.map((question)=>
        <p>{atob(question.question)}</p>
      )}
    </div>
  )
}