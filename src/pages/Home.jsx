import logo from "../assets/logo.png"
import HomeSubjectButton from "../components/HomeSubjectButton"

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logo} alt="logo" width={400} />
      <div className="space-x-2 mt-4">
        <HomeSubjectButton onClick={() => navigateToSubject("Math")}>Math</HomeSubjectButton>
        <HomeSubjectButton onClick={() => navigateToSubject("Countries")}>Countries</HomeSubjectButton>
        <HomeSubjectButton onClick={() => navigateToSubject("Animals")}>Animals</HomeSubjectButton>
      </div>
    </div>
  )
}
export default Home