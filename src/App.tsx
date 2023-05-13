import './App.css'
import Router from './Router'
import { createContext } from 'react'

type usernameContextType = {
  username: string|null;
}

const Context = createContext<usernameContextType>({username: null});

function App() {
    return (
      <Context.Provider value={{username: null}}>
      <div>
        <Router />
      </div>
      </Context.Provider>
      
    )
}

export default App
