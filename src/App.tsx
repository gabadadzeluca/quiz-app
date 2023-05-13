import './App.css'
import Router from './Router'
import { createContext, useState} from 'react'

type usernameContextType = {
  username: string|null;
  setUsername: (username: string|null) => void; 
}
export const Context = createContext<usernameContextType>({username:'', setUsername: ()=>{}});


function App() {
  const [username, setUsername] = useState<string|null>(null);
  console.log('username: (app.tsx)',username);
  return (
    <Context.Provider value={{username, setUsername}}>
      <div>
        <Router />
      </div>
    </Context.Provider>
    )
}

export default App
