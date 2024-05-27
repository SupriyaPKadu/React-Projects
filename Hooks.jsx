import {useState}from 'react'


const Hooks = () => {
    const [color, setColor] = useState("red");
     
  return (
    <>
       <h1>The Default Color:{color}</h1>
    </>
  )
}

export default Hooks
