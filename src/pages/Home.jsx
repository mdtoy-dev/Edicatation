import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import NameEntry from "../components/NameEntry"
import MathGame from "../components/MathGame"

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <NameEntry />
      <img src={logo} alt="logo" width={400} />
      <Link
        to="/gamecategory"
        className="bg-orange-500 hover:bg-cyan-700 text-white font-bold py-2 px-10 rounded"
      >
        Discover the topics
      </Link>
    </div>
  )
}

export default Home
