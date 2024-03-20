import React, { useState } from "react"
import Card from "./Card"


function Cards() {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "indigo",
    "pink",
    "teal",
  ]
  const [items, setItems] = useState(
    colors
      .concat(colors)
      .map((color, index) => ({ id: index, color: color, stat: "" }))
      .sort(() => Math.random() - 0.5)
  )

  const [prev, setPrev] = useState(-1)

 

  function handleClick(index) {
    if (prev === -1) {
      items[index].stat = "active"
      setItems([...items])
      setPrev(index)
    } else {
      check(index)
    }
  }

  function check(current) {
    if (
      items[current].stat !== "active" &&
      items[prev].color === items[current].color
    ) {
      items[current].stat = "correct"
      items[prev].stat = "correct"
      setItems([...items])
      setPrev(-1)
    } else {
      items[current].stat = "active"
      setItems([...items])
      setTimeout(() => {
        items[current].stat = ""
        items[prev].stat = ""
        setItems([...items])
        setPrev(-1)
      }, 1000)
    }
  }


  return (
    <div>
      <div className=" mt-10 flex flex-col items-center justify-center ">
      <h1 className="text-6xl font-extrabold animate-change-color ">Match the colours</h1>      
      </div>
    <div className="flex mb-4 justify-center items-center h-screen">
    <div className="max-w-xl border-4 border-ivory-400 bg-white rounded-lg shadow-md p-8">
    <div className="grid grid-cols-4 max-w-5xl mx-auto my-auto gap-2">
      {items.map((color, index) => (
        <Card
          key={index}
          color={color.color}
          id={index}
          stat={color.stat}
          handleClick={handleClick}
        />
      ))}
    </div>
    </div>
    </div>
    </div>
  )
}

export default Cards
