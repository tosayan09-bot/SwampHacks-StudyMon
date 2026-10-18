import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Pets from './pages/Pets'

function App() {
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
