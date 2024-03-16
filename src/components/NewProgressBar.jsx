import React, {useState} from 'react'

const NewProgressBar = () => {
	const [progress, setProgress] = useState(percentage)

	return (
		<div className='progress-bar-container'>
			<div className='progress-bar' style={{width: `${progress}%`}}>
				<span className='progress-label'>{`${progress}%`}</span>
			</div>
		</div>
	)
}

export default NewProgressBar
