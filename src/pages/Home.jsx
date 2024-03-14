import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import NameEntry from "../components/NameEntry"

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <img src={logo} alt="logo" className="w-1/3 m-auto drop-shadow-2xl" />
            <NameEntry className="w-2/3"/>
      
    </div>
  )
}

export default Home
