import React from "react"
import { useState, useEffect } from "react"



function NameEntry() {
  const [name, setName] = useState("")
  const [showInput, setShowInput] = useState(true)


  

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      
      setShowInput(false)
      localStorage.setItem("name", event.target.value);
      setName(event.target.value);
    }
  }

  return (
    <div>
      {showInput ? (
        <input
          type="text"
          placeholder="Enter your name"
          onKeyDown={handleKeyDown}
          className="w-max h-12 text-center text-teal-700 text-xl border border-2 border-orange-600 shadow-orange-900 font-bold rounded-sm bg-orange-300 placeholder-teal-700 shadow-2xl focus:outline-none focus:border-teal-600"
        />
      ) : (
        <p className="text-4xl mb-4 font-bold text-teal-700 hover:text-teal-800">Hello {name}!</p>
      )}

    </div>
  )
}

export default NameEntry
