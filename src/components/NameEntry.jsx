import React from "react"
import { useState } from "react"

function NameEntry() {
  const [name, setName] = useState("")
  const [showInput, setShowInput] = useState(true)

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setName(event.target.value)
      setShowInput(false)
    }
  }

  return (
    <div>
      {showInput ? (
        <input
          type="text"
          placeholder="Your Name"
          onKeyDown={handleKeyDown}
          className="w-28 text-center text-xl font-bold boder-2 rounded-md bg-red-100"
        />
      ) : (
        <p className="text-2xl font-bold text-blue-500 underline hover:text-3xl">Hello {name}</p>
      )}
    </div>
  )
}

export default NameEntry
