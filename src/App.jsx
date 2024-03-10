
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='flex flex-col h-screen justify-between'>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  ) 
}

export default App
