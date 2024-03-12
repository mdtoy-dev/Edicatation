import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Game from "./pages/Game"
import Score from "./pages/Score"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Cards from "./components/Cards"
import FlagGame from "./components/FlagGame"

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/score" element={<Score />} />
          <Route path="/memory" element={<Cards />} />
          <Route path="/countries" element={<FlagGame />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
