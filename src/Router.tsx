import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'

export default function Router(){
  return (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/game" element={<></>} />
    <Route path="/leaderboard" element={<></>} />
  </Routes>
  )
}