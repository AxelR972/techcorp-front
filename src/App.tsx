import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Tools } from './pages/Tools'
//import Analytics from './pages/Analytics'
//import Settings from './pages/Settings'



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tools" element={<Tools />} />
      {/*<Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />*/}
     </Routes>
    </>
  )
}

export default App