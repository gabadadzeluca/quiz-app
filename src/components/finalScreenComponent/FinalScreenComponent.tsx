export default function FinalScreenComponent(props:{
  correctAnswers: number;
  currentQuestionIndex: number;
}){
  const {correctAnswers, currentQuestionIndex} = props;
  return(
    <>
      <h3>GAME IS FINISHED</h3>
      <p>score: {correctAnswers}/{currentQuestionIndex + 1}</p>
    </>
  )
}