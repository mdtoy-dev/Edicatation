
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper'

function App() {
  return (
    <Router>
      <div className='h-screen'>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Wrapper>
      </div>
    </Router>
  ) 
}

export default App
