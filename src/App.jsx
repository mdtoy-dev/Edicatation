import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Score from "./components/ScoreComp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import FlagGame from "./components/FlagGame";
import Explore from "./pages/Explore";
import Quizquestion from "./components/quizQuestionGenerator";
import Videos from "./components/VideoPlayer";
import MathGame from "./components/MathGame";
import ScoreList from "./pages/Score";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/score" element={<Score />} />
          <Route path="/memory" element={<Cards />} />
          <Route path="/countries" element={<FlagGame />} />
          <Route path="/quiz/:type" element={<Quizquestion />} />
          <Route path="/videos/:type" element={<Videos />} />
          <Route path="/math" element={<MathGame />} />
          <Route path="/scoreList" element={<ScoreList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
