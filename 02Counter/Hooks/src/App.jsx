import {useState} from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [Counter , setCounter] = useState(15)

   const addValue=()=>{
     setCounter(Counter+1)
   }

   const removeValue =()=>{
    setCounter(Counter-1)
   }

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="Muskan Chauhan" role="Full stack developer"/>
       <Card username="Bhuvan Chauhan" role="Backend Developer"/>
       <Card/>
    </>
  )
}

export default App
