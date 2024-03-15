import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import NameEntry from "../components/NameEntry"

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <img src={logo} alt="logo" className="w-1/3 m-auto drop-shadow-2xl" />
      <div className="grid grid-cols-1 m-8 sm:m-20">
          <div  className="m-auto sm:text-xl p-6, text-center text-cyan-50 drop-shadow-2xl rounded-lg subpixel">
          <p className="text-lg sm:text-2xl font-semibold mb-4">Welcome to Kids Edicatation, where learning meets playtime!<br /></p>
          <p> 
            Challenge your brain with trivia questions, sharpen your memory skills, and conquer math puzzles while having a blast!<br /> 
            Don't forget to explore our awesome video section filled with fun and educational videos to spark your curiosity.<br /> 
            Get ready to learn, laugh, and play your way to brilliance at Kids Edicatation!<br /> <br />
          </p>
          </div><NameEntry className="w-2/3"/>
          </div>
         

      
    </div>
  )
}

export default Home
