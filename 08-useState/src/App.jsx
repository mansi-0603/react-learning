import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(20)
  const [Username, setUsername] = useState("aman")
  const [colors, setcolors] = useState(["red, ", "blue, ", "yellow"])
  const buttonClicked = () => {
    setnum(200);
    setUsername("raj");
    setcolors(["green, ", "black, ", "white, "])

    
  }

  return (
    <div>
      <h1>the value = {num}</h1>
      <h1>my new name is {Username}</h1>
      <h1>My favt colors are {colors}</h1>
      <button onClick={buttonClicked}>click here</button>
    </div>
  )
}

export default App
