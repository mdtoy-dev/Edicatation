import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import HomeSubjectButton from "../components/HomeSubjectButton"
import NameEntry from "../components/NameEntry"

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <NameEntry />
      <img src={logo} alt="logo" width={400} />
      <Link
        to="/game"
        className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Learning
      </Link>
      <div
        className="grid grid-cols-2 space-x-2 space-y-2 mt-2 mx-5 place-items-baseline
      "
      >
        <Link to="/memory">
          <HomeSubjectButton>Memory</HomeSubjectButton>
        </Link>
        <Link to="/math">
          <HomeSubjectButton>Math</HomeSubjectButton>
        </Link>
        <Link to="/countries">
          <HomeSubjectButton>Countries</HomeSubjectButton>
        </Link>
        <Link to="/animals">
          <HomeSubjectButton>Animals</HomeSubjectButton>
        </Link>
      </div>
    </div>
  )
}

export default Home
