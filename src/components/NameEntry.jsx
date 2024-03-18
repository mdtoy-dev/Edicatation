import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";



function NameEntry() {
  const [name, setName] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [errorMessage, setErrorMessage] = useState("Enter your name");
  
  
  const handleChange = (event) => {
    setName(event.target.value);
  };


  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === "") {
      setErrorMessage("Please add your name to continue");   
    } else {
    setShowInput(false);
    localStorage.setItem("name", name);
    };
    
  }

  return (
    <div>
      {showInput ? (
      <div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:mt-3">
        <p className="sm:text-3xl font-semibold mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center text-orange-400">But first things first, what is your name?</p>
        <input
        type="text"
        placeholder={errorMessage}
        onChange={handleChange}
        className="h-12 text-center text-teal-700 text-xl border border-2 border-orange-600 rounded-lg shadow-orange-900 font-bold bg-orange-300 placeholder-teal-700 shadow-2xl focus:outline-none focus:border-teal-600"
        />
        <button
        type="submit"
        className="m-auto my-2 bg-orange-500 hover:bg-cyan-700 text-cyan-50 font-bold py-2 px-10 rounded"
        >
          Submit
        </button>
        </form>
     </div>
      ) : (
      <div className="grid grid-cols-1 sm:mt-3">
        <p className="sm:text-3xl font-semibold mb-4 text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  text-orange-400">Hello {name}, Let's start learning!</p>
        <Link
        to="/explore"
        className="m-auto my-2 bg-orange-500 hover:bg-cyan-700 text-cyan-50 font-bold py-2 px-10 rounded animate-bounce"
        >
          Discover the topics
          </Link>
      </div>
      )}

    </div>
  )
}

export default NameEntry
