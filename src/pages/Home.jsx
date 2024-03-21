import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import NameEntry from "../components/NameEntry"

const Home = () => {
  return (
  <div className="flex flex-col m-16 sm:flex-row">
    <img src={logo} alt="logo" className="w-1/3 m-auto drop-shadow-2xl" />
    <div className="bg-white bg-opacity-50 drop-shadow p-10 border border-none rounded-xl grid grid-cols-1 m-8 sm:m-20">
      <div className="m-auto sm:text-xl p-6, text-center text-cyan-600 rounded-lg drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.8)]">
        <p className="text-lg sm:text-2xl font-semibold mb-4">Welcome to Kids Edicatation, where learning meets playtime!<br /></p>
        <p> 
          Challenge your brain with trivia questions, sharpen your memory skills, and conquer math puzzles while having a blast!<br /> 
          Don't forget to explore our awesome video section filled with fun and educational videos to spark your curiosity.<br /> 
          Get ready to learn, laugh, and play your way to brilliance at Kids Edicatation!<br /> <br />
        </p>
      </div>
      <NameEntry className="w-2/3"/>
    </div>
  </div>
  )
}

export default Home
