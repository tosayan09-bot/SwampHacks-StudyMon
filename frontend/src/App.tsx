import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import Pets from './pages/Pets'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
    <BrowserRouter>
      <nav>
        <Link to = "/Home">Home</Link>
        <Link to = "/Pets">Pets</Link>
      </nav>
      <Routes>
        <Route path = "/Home" element={<Home />} />
        <Route path = "/Pets" element={<Pets />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
