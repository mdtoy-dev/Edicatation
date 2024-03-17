import React, {useState} from 'react'
import AnimalCard from './AnimalCard'
import catImage from '../assets/animals/cat.jpg'
import chickenImage from '../assets/animals/chicken.jpg'
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
import catSound from '../assets/sounds/little-cat-meow.mp3'
import chickenSound from '../assets/animals/chicken-clucking.mp3'
import cowSound from '../assets/sounds/cow-moo.mp3'
import dogSound from './assets/sounds/dog-growling.mp3'
import eagleSound from '../assets/sounds/wild-eagle-calling.mp3'
import goatSound from '../assets/sounds/goat-baa-stutter.mp3'
import henSound from '../assets/sounds/hen-clucking.mp3'
import lionSound from '../assets/sounds/wild-lion-roar.mp3'
import monkeySound from '../assets/sounds/little-monkey-screech.mp3'
import pigSound from '../assets/sounds/little-monkey-screech'
import roosterSound from '../assets/sounds/rooster-calling.mp3'
import sheepSound from '../assets/sounds/sheep-sounds.mp3'
import tigerSound from '../assets/sounds/tiger-roar.mp3'

const animals = [
	{name: 'cat', image: catImage, sound: catSound},
	{name: 'chicken', image: chickenImage, sound: chickenSound},
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

const Game = () => {
	const [question, setQuestion] = useState('')
	const [selectedAnimal, setSelectedAnimal] = useState(null)

	const generateQuestion = () => {
		const randomAnimal = animals[Math.floor(Math.random() * animals.length)]
		setQuestion(`What animal makes this sound?`)
		setSelectedAnimal(randomAnimal)
	}

	const handleAnimalClick = () => {
		if (animals.name === selectedAnimal.name) {
			new Audio(animals.sound.default).play()
			setQuestion('Correct! Play again?')
		} else {
			setQuestion('Try again!')
		}
	}
}

export default Game
