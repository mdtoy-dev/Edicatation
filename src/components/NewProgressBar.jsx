import React from 'react'

const NewProgressBar = ({percentage}) => {
	return (
		<div className='progress-bar-container'>
			<div className='progress-bar' style={{width: `${percentage}%`}}>
				<span className='progress-label'>{`${percentage}%`}</span>
			</div>
		</div>
	)
}

export default NewProgressBar
