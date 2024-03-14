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

	

// Define propTypes for the ProgressBar component
ProgressBar.propTypes = {
	scoreCount: PropTypes.number.isRequired, // Define scoreCount as a required number prop
}

export default ProgressBar
