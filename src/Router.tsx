import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import GamePage from './pages/GamePage/GamePage'
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage'

export default function Router(){
  return (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/#/" element={<LoginPage />} />
    <Route path="/game" element={<GamePage />} />
    <Route path="/leaderboard" element={<LeaderboardPage />} />
  </Routes>
  )
}