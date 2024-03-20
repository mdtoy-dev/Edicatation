import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import AnimalCard from './AnimalCard'
import catImage from '../assets/animals/cat.jpg'
import cowImage from '../assets/animals/cow.jpg'
import dogImage from '../assets/animals/dog.jpg'
import eagleImage from '../assets/animals/eagle.jpg'
import goatImage from '../assets/animals/goat.jpg'
import henImage from '../assets/animals/hen.jpg'
import lionImage from '../assets/animals/lion.jpg'
import monkeyImage from '../assets/animals/monkey.jpg'
import pigImage from '../assets/animals/pig.jpg'
import roosterImage from '../assets/animals/rooster.jpg'
import sheepImage from '../assets/animals/sheep.jpg'
import tigerImage from '../assets/animals/tiger.jpg'
import catSound from '../assets/sounds/cat-sound.mp3'
import cowSound from '../assets/sounds/cow-sound.mp3'
import dogSound from '../assets/sounds/dog-sound.mp3'
import eagleSound from '../assets/sounds/eagle-sound.mp3'
import goatSound from '../assets/sounds/goat-sound.mp3'
import henSound from '../assets/sounds/hen-sound.mp3'
import lionSound from '../assets/sounds/lion-sound.mp3'
import monkeySound from '../assets/sounds/monkey-sound.mp3'
import pigSound from '../assets/sounds/pig-sound.mp3'
import roosterSound from '../assets/sounds/rooster-sound.mp3'
import sheepSound from '../assets/sounds/sheep-sound.mp3'
import tigerSound from '../assets/sounds/tiger-sound.mp3'

// Define an array of objects representing different animals
const animals = [
	{name: 'cat', image: catImage, sound: catSound},
	{name: 'hen', image: henImage, sound: henSound},
	{name: 'cow', image: cowImage, sound: cowSound},
	{name: 'dog', image: dogImage, sound: dogSound},
	{name: 'eagle', image: eagleImage, sound: eagleSound},
	{name: 'goat', image: goatImage, sound: goatSound},
	{name: 'hen', image: henImage, sound: henSound},
	{name: 'lion', image: lionImage, sound: lionSound},
	{name: 'monkey', image: monkeyImage, sound: monkeySound},
	{name: 'pig', image: pigImage, sound: pigSound},
	{name: 'rooster', image: roosterImage, sound: roosterSound},
	{name: 'sheep', image: sheepImage, sound: sheepSound},
	{name: 'tiger', image: tigerImage, sound: tigerSound},
]

// Define the Game component
const AnimalRecognitionGame = () => {
	const [question, setQuestion] = useState('')
	const [selectedAnimal, setSelectedAnimal] = useState(null)

	// Define a function to generate a random question
	const generateQuestion = () => {
		// Select a random animal from the animals array and set question to ask the user
		const randomAnimal = animals[Math.floor(Math.random() * animals.length)]
		setQuestion(`What animal makes this sound?`)

		// Set the selected animal for the current question
		setSelectedAnimal(randomAnimal)
		new Audio(randomAnimal.sound).play()
		// new Audio(selectedAnimal.sound.default).play()
	}

	// Define a function to handle click events on animal cards
	const handleAnimalClick = clickedAnimal => {
		if (clickedAnimal.sound === selectedAnimal.sound) {
			new Audio(clickedAnimal.sound).play()
			setQuestion('Correct! Play again?')
			setSelectedAnimal(null)
		} else {
			setQuestion('Try again!')
		}
	}

	// Render the component
	return (
		<div className='animal-game'>
			<h1>Animal Recognition Game</h1>
			{question ? (
				<div>
					<p>{question}</p>
					{selectedAnimal && (
						<div className='w-24'>
							{animals.map(animal => (
								<AnimalCard
									key={animal.name}
									image={animal.image}
									onClick={() => handleAnimalClick(animal)}
								/>
							))}
							{selectedAnimal && (
								<ReactPlayer
									url={selectedAnimal.sound}
									controls // Show default controls (play, pause, etc.)
								/>
							)}
						</div>
					)}
				</div>
			) : (
				<button onClick={generateQuestion}>Start Game</button>
			)}

			<ReactPlayer url={tigerSound} />
		</div>
	)
}

export default AnimalRecognitionGame
