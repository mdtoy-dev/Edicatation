import React, {useState, useEffect} from 'react'

const Timer = ({timeLimit, onTimeout}) => {
	const [seconds, setSeconds] = useState(timeLimit)
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		let interval

		if (isActive && seconds > 0) {
			interval = setInterval(() => {
				setSeconds(prevSeconds => prevSeconds - 1)
			}, 1000)
		} else if (seconds === 0) {
			setIsActive(false)
			onTimeout()
		}

		return () => clearInterval(interval)
	}, [isActive, seconds, onTimeout])

	const formattedTime = `${Math.floor(seconds / 60)
		.toString()
		.padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`

	return (
		<div>
			<p> Time remaining: {formattedTime}</p>
			<button onClick={() => setIsActive(!isActive)}>
				{isActive ? 'Pause' : 'Start'}
			</button>
		</div>
	)
}

export default Timer
