import React from "react"
import { useState } from "react"
import Game from "../pages/Game"


function NameEntry() {
  const [name, setName] = useState("")
  const [showInput, setShowInput] = useState(true)

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setName(event.target.value)
      setShowInput(false)
    
    }
  }

if(!name){
  
  return <Game name={name}/>

}

  return (
    <div>
      {showInput ? (
        <input
          type="text"
          placeholder="Enter your name"
          onKeyDown={handleKeyDown}
          className="w-80 h-12 text-center text-teal-700 text-xl border border-2 border-orange-600 font-bold rounded-sm bg-orange-300 placeholder-teal-700 shadow-2xl focus:outline-none focus:border-teal-600"
        />
      ) : (
        <p className="text-4xl mb-4 font-bold text-teal-700 hover:text-teal-800">Hello {name}!</p>
      )}

    </div>
  )
}

export default NameEntry
