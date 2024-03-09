import React from 'react'
import data from '../data/questions.json'

const Question = () => {
	return (
		<div>
			<ul>
				{data.questions.map(e => (
					<li key={e.id}>{e.question}</li>
				))}
			</ul>
		</div>
	)
}

export default Question
