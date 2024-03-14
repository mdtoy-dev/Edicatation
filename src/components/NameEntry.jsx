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
        <div className="grid grid-cols-1 m-8 sm:m-20">
          <div  className="m-auto sm:text-xl p-6, text-cyan-50 drop-shadow-2xl rounded-lg subpixel">
          <p className="text-lg sm:text-2xl font-semibold mb-4">Welcome to Kids Educatation, where learning meets playtime!<br /></p>
          <p> 
            Challenge your brain with trivia questions, sharpen your memory skills, and conquer math puzzles while having a blast!<br /> 
            Don't forget to explore our awesome video section filled with fun and educational videos to spark your curiosity.<br /> 
            Get ready to learn, laugh, and play your way to brilliance at Kids Educatation!<br /> <br />
          </p>
           
          </div>
          <div className="sm:w-9/12">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:mt-3">
            <p className="sm:text-3xl font-semibold mb-4 text-orange-200">But first things first, what is your name?</p>
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
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:m-20 sm:p-6 justify-center align-center">
        <p className="text-lg sm:text-4xl m-10 sm:mb-14 font-bold text-cyan-50">Hello {name}, Let's start learning!</p>
        <Link
        to="/explore"
        className="h-12 m-auto bg-orange-500 animate-bounce hover:bg-cyan-700 text-center text-cyan-50 font-bold py-2 px-10 rounded"
      >
        Discover the topics
      </Link>
        </div>
      )}

    </div>
  )
}

export default NameEntry
