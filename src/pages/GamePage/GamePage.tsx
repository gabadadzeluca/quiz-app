import { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import axios from "axios";
import { QuestionType } from "../../utils/QuestionType";
import QuestionComponent from "../../components/questionComponent/QuestionComponent";

export default function GamePage() {
  const { username, number, categoryId, difficulty } = useContext(Context);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const API_URL = `https://opentdb.com/api.php?amount=${number}&category=${categoryId}&difficulty=${difficulty}&encode=base64`;
  const [questions, setQuestions] = useState<QuestionType[] | []>([]);

  useEffect(() => {
    fetchQuestions();
  }, []);
  const fetchQuestions = async () => {
    const response = await axios.get(API_URL);
    setQuestions(response.data?.results);
  };

  const handleQuestionChange = () => {
    console.log("Q NUMBER: ", currentQuestionIndex + 1);
    if (currentQuestionIndex + 1 === number) return; // last question => add function to end the game
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      <>
        {questions.length > 0 ? (
          <QuestionComponent 
            question={questions[currentQuestionIndex]} 
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            currentQuestionIndex={currentQuestionIndex}
          />
        ) : null}
        <button onClick={handleQuestionChange}>NEXT</button>
      </>
    </div>
  );
}
