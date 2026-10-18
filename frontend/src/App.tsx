import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Pets from './pages/Pets'
import Battle from './pages/Battle'
import Ethan from './pages/Ethan'
import Owen from './pages/owen'
import Samarth from './pages/samarth'

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
        <Route path="/friends/ethan" element={<Ethan />} />
        <Route path="/friends/owen" element={<Owen />} />
        <Route path="/friends/samarth" element={<Samarth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
