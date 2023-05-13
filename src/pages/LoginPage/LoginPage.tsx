import { useContext } from 'react'
import { Context } from '../../App';
import { useNavigate } from 'react-router-dom'
import { categoryOptions, difficultyOptions } from '../../utils/options';
import { number } from 'prop-types';

export default function LoginPage(){
  const {
    username,
    setUsername,
    setCategoryId,
    setDifficulty,
    setNumber,
  } = useContext(Context);
  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    let value = e.target.value;
    value = value.replace(/[^a-zA-Z\s]/g, '');
    setUsername(value);
  }

  const handleSubmit = (e: React.MouseEvent) =>{
    e.preventDefault();
    if(username === null || username === '') return;
    navigate('/game')
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    let value = e.target.valueAsNumber;
    setNumber(value);
  }

  return (
    <form>
      <div>
        <h3>Enter your name:</h3>
        <input 
          type='text'
          placeholder="name:" 
          onChange={handleNameChange}
          value={username?? ''}
        />
      </div>

      <div>
        <input type='number' placeholder='Number of questions' onChange={handleNumberChange} />

        <select>
          {categoryOptions.map((obj) => (
            <option key={obj.id} value={obj.name}>
              {obj.name}
            </option>
          ))}
        </select>
        
        <select>
          {difficultyOptions.map((option)=>(
            <option value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleSubmit}>Start</button>
    </form>
  )
}