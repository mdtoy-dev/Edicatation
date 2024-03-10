import React from "react";
import { useState } from 'react';

function NameEntry() {
    const [name, setName] = useState("");
    const [showInput, setShowInput] = useState(true);
  
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        setName(event.target.value);
        setShowInput(false);
      }
    };
  
    return (
      <div>
        {showInput ? (
          <p>
            Welcome {" "}
            <input
              type="text"
              placeholder="Enter your name"
              onKeyDown={handleKeyDown}
            ></input>
          </p>
        ) : (
          <p>Hello {name}</p>
        )}
      </div>
    );
  }
  

export default NameEntry;