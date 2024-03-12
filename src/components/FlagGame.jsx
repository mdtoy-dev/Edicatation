import React, { useState, useEffect } from "react"
import countriesData from "../data/flagGame.json"

function FlagGame() {
  const [visiblePairs, setVisiblePairs] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [selectedFlag, setSelectedFlag] = useState(null)
  const [score, setScore] = useState(0)

  useEffect(() => {
    setInitialVisibleItems()
  }, [])

  const setInitialVisibleItems = () => {
    const { countries } = countriesData
    const pairs = countries.map((country) => ({
      country,
      flag: countriesData.countries.find((f) => f.id === country.id),
    }))
    const shuffledPairs = shuffleArray(pairs)
    const initialVisiblePairs = shuffledPairs.slice(0, 5)
    const flags = initialVisiblePairs.map((pair) => pair.flag)
    const shuffledFlags = shuffleArray(flags)
    const shuffledVisiblePairs = initialVisiblePairs.map((pair, index) => ({
      country: pair.country,
      flag: shuffledFlags[index],
    }))
    setVisiblePairs(shuffledVisiblePairs)
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const selectCountry = (country) => {
    setSelectedCountry(country)
  }

  const selectFlag = (flag) => {
    setSelectedFlag(flag)
    checkMatch(selectedCountry, flag)
  }

  const checkMatch = (country, flag) => {
    if (country && flag && country.id === flag.id) {
      setInitialVisibleItems()
      setScore(score + 10)
    } else {
      setScore(score - 5)
    }
  }

  const selectedStyle = "bg-blue-200"

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="mb-10 text-2xl">SCORE: {score}</h1>
      <div className="flex flex-row">
        <div className="flex-1">
          {visiblePairs.map((pair) => (
            <div
              key={pair.country.id}
              className={`p-4 border border-gray-300 rounded cursor-pointer transition-colors ${
                selectedCountry && selectedCountry.id === pair.country.id
                  ? selectedStyle
                  : ""
              }`}
              onClick={() => selectCountry(pair.country)}
            >
              {pair.country.name}
            </div>
          ))}
        </div>
        <div className="flex-1">
          {visiblePairs.map((pair) => (
            <div
              key={pair.flag.id}
              className={`p-4 border border-gray-300 rounded cursor-pointer transition-colors ${
                selectedFlag && selectedFlag.id === pair.flag.id
                  ? selectedStyle
                  : ""
              }`}
              onClick={() => selectFlag(pair.flag)}
            >
              {pair.flag.flag_emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FlagGame
