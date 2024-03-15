import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({scoreCount}) => {
	// Calculate progress percentage based on scoreCount
	const progressPercentage = scoreCount > 0 ? (scoreCount / 10) * 100 : 0

	// Define classes for different progress states
	const classes = [
		'text-amber-200',
		'text-amber-300',
		'text-amber-400',
		'text-amber-500',
		'text-amber-50',
	]

	// Calculate index based on scoreCount for determining starClass
	const index = Math.min(Math.floor(scoreCount / 3), classes.length - 1)
	const starClass = `h-16 w-16 fill-current ${classes[index]}`

	// State for tracking whether progress is increasing or decreasing
	const [isIncreasing, setIsIncreasing] = useState(true)

	// Effect to update isIncreasing state based on scoreCount changes
	useEffect(() => {
		setIsIncreasing(prevIsIncreasing =>
			scoreCount > prevIsIncreasing ? true : false
		)
	}, [scoreCount])

	// Render progress bar component
	return (
		<div>
			<div className='w-9/12 m-auto relative'>
				<div className='relative'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className={starClass}
						style={{
							position: 'absolute',
							left: `${progressPercentage}%`,
							transform: isIncreasing
								? 'scale(1.2)'
								: 'scale(0.8)',
							transition: 'transform 0.3s ease-in-out',
						}}
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path d='M12 2 L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 Z' />
					</svg>
				</div>
				<div className='mt-0 self-start justify-self-center place-self-center m-auto w-9/12 bg-gray-200 rounded-full h-10 dark:bg-gray-700'>
					<div
						className='progress bg-green-400 rounded-full h-full'
						style={{width: `${progressPercentage}%`}}
					/>
					<div className='ml-4 text-sm text-right font-semibold text-gray-600 dark:text-gray-400'>
						{`${scoreCount}/10`}
					</div>
				</div>
			</div>
		</div>
	)
}

// Define propTypes for the ProgressBar component
ProgressBar.propTypes = {
	scoreCount: PropTypes.number.isRequired, // Define scoreCount as a required number prop
  

export default ProgressBar
