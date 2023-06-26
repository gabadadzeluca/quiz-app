import { Link } from "react-router-dom";
import styles from "./FinalScreenComponent.module.css";

export default function FinalScreenComponent(props:{
  correctAnswers: number;
  currentQuestionIndex: number;
}){
  const {correctAnswers, currentQuestionIndex} = props;
  return(
    <div  className={styles.finalScreenContainer}>
      <h3>GAME IS FINISHED</h3>
      <p>score: {correctAnswers}/{currentQuestionIndex + 1}</p>
      <div className={styles.buttonDiv}>
      <button>
        <Link to={'/leaderboard'} className={styles.link}>Leaderboard</Link>
      </button>
      <button>
        <Link to={'/'} className={styles.link}>Play Again</Link>
      </button>
      </div>
     
    </div>
  )
}