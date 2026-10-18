<<<<<<< HEAD
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Pets from './pages/Pets'
import Battle from './pages/Battle'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pets">Pets</Link>
        <Link to="/battle">Battle</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/battle" element={<Battle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
=======
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
>>>>>>> 1a5ebeae3cf1e89af73421479f5bb55d907cec10
