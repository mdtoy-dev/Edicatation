import logo from '../assets/logo.png'
import HomeSubjectButton from '../components/HomeSubjectButton'
import Question from '../components/Question'
import NameEntry from '../components/NameEntry'

const Home = () => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<NameEntry />
			<img src={logo} alt='logo' width={400} />
			<button className='bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
				Start Learning{' '}
			</button>
			<div className='space-x-2 mt-4'>
				<HomeSubjectButton onClick={() => navigateToSubject('Math')}>
					Math
				</HomeSubjectButton>
				<HomeSubjectButton
					onClick={() => navigateToSubject('Countries')}
				>
					Countries
				</HomeSubjectButton>
				<HomeSubjectButton onClick={() => navigateToSubject('Animals')}>
					Animals
				</HomeSubjectButton>
			</div>
			<Question />
		</div>
	)
}
export default Home
