import { useContext } from 'react'
import { Context } from '../../App';
import { useNavigate } from 'react-router-dom'


export default function LoginPage(){
  const { username, setUsername } = useContext(Context);
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
  return (
    <form>
      <h3>Enter your name:</h3>
      <input type='text' placeholder="name:" onChange={handleNameChange}/>
      <button onClick={handleSubmit}>Start</button>
    </form>
  )
}