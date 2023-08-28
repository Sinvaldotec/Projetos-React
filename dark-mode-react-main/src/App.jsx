import { useState } from 'react'
import './App.css'

function App() {
const [darkMode, setDarkMode] = useState("light_mode")
const [btn, setBtn] = useState("Ativar")

const handleClick = () => {
  toggle()
}

const toggle = () => {

  if(darkMode == "dark_mode" && btn == "Desativar") {
    setDarkMode("light_mode")
    setBtn("Ativar")
  }else {
    setDarkMode("dark_mode")
    setBtn("Desativar")
  }
  
}

  return (
    <div className={darkMode}>
      <h1>Lorem.</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus sapiente illum vel nemo hic minima asperiores modi. Laboriosam inventore sit illo explicabo, quae eligendi temporibus blanditiis culpa eum, delectus optio!</p>
      <button onClick={handleClick}>{btn}</button>
    </div>
  )
}

export default App
