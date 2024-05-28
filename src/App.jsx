import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conditionals from './components/Conditionals'
import List from './components/List'

function App() {
  
  const cars = ['Ford', 'BMW', 'Audi', 'Thar'];

  return (
    <>
      {/* <Conditionals cars={cars} />  */}

      <h1>Welcome To Garage</h1>
      <List items={cars} />
    </>
  )
}

export default App
