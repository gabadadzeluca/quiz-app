import './App.css'
import Router from './Router'
import { createContext, useReducer } from 'react'

type userDataContextType = {
  username: string|null;
  setUsername: (username: string|null) => void; 
  setDifficulty: (difficulty: string|null) => void; 
  setNumber: (number: number|null) => void; 
  setCategoryId: (number: number|null) => void; 
  categoryId: number|null;
  difficulty: string|null;
  number: number|null;
}

type Action =
  | { type: 'SET_USERNAME', payload: string | null }
  | { type: 'SET_CATEGORY_ID', payload: number | null }
  | { type: 'SET_DIFFICULTY', payload: string | null }
  | { type: 'SET_NUMBER', payload: number | null };


interface AppState {
  username: string|null;
  categoryId: number|null;
  difficulty: string|null;
  number: number|null;
}

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_CATEGORY_ID':
      return { ...state, categoryId: action.payload };
    case 'SET_DIFFICULTY':
      return { ...state, difficulty: action.payload };
    case 'SET_NUMBER':
      return { ...state, number: action.payload };
    default:
      throw new Error(`Unhandled action type`);
  }
}
export const Context = createContext<userDataContextType>(
  {
    username:'',
    categoryId: null,
    difficulty: null,
    number: null,
    setUsername: ()=>{},
    setDifficulty: ()=>{}, 
    setNumber: () => {},
    setCategoryId: () => {} 
  }
);


function App() {
  const [userData, dispatch] = useReducer(reducer, 
    {
      username:'',
      difficulty: null,
      categoryId: null,
      number: null 
    }
  );

  const setUsername = (username: string|null) =>{
    dispatch({ type: 'SET_USERNAME', payload: username });
  }
  const setCategoryId = (id: number|null) =>{
    dispatch({ type: 'SET_CATEGORY_ID', payload: id});
  }
  const setDifficulty = (difficulty: string|null) =>{
    dispatch({ type: 'SET_DIFFICULTY', payload: difficulty});
  }
  const setNumber = (number: number|null) =>{
    dispatch({ type: 'SET_NUMBER', payload: number});
  }

  console.log("username: ",userData.username)
   
  return (
    <Context.Provider
     value={
      {
        username: userData.username,
        difficulty: userData.difficulty,
        categoryId: userData.categoryId, 
        number: userData.number,
        setCategoryId,
        setDifficulty,
        setNumber,
        setUsername
      }
    }>
      <div>
        <Router />
      </div>
    </Context.Provider>
    )
}

export default App
