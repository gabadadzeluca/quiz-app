import { Route, Routes } from 'react-router-dom'

export default function Router(){
  return (
  <Routes>
    <Route path="/" element={<></>} />
    <Route path="/game" element={<></>} />
    <Route path="/leaderboard" element={<></>} />
  </Routes>
  )
}