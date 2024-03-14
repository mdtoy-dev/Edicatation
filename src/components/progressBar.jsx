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

// Define propTypes for the ProgressBar component
ProgressBar.propTypes = {
	scoreCount: PropTypes.number.isRequired, // Define scoreCount as a required number prop
}
	// State for tracking whether progress is increasing or decreasing
	const [isIncreasing, setIsIncreasing] = useState(true);

	// Effect to update isIncreasing state based on scoreCount changes
	useEffect(() => {
		setIsIncreasing(prevIsIncreasing =>
			scoreCount > prevIsIncreasing ? true : false
		);
	}, [scoreCount]);



export default ProgressBar
