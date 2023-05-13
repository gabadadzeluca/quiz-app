import { useContext } from 'react'
import { Context } from '../../App';

export default function LoginPage(){
  
  const {setUsername} = useContext(Context);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    let value = e.target.value;
    value = value.replace(/[^a-zA-Z\s]/g, '');
    setUsername(value);
  }
  return (
    <form>
      <h3>Enter your name:</h3>
      <input type='text' placeholder="name:" onChange={handleNameChange}/>
      <button>Start</button>
    </form>
  )
}