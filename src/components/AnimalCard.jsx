import React from 'react'

const AnimalCard = ({image, onClick, disabled}) => {
	return (
		<div
			onClick={onClick}
			style={{cursor: 'pointer', opacity: disabled ? 0.5 : 1}}
		>
			<img src={image} alt='Animal' />
		</div>
	)
}

export default AnimalCard
