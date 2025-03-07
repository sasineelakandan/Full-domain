import { useState,createContext,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Child2 from './Child2'
import Child1 from './Child1'

export const transfer=createContext()

function App() {
  const [count, setCount] = useState(0)
  const [name,setName]=useState('')
   function handleclick(e){
      setName(e.target.value)
      
   }

   const inputRef=useRef(null)
  
  async function handleSubmit(){
    try{
      console.log('ref',inputRef.current.value)
        let response=await axios.post('http://localhost:8000/login',{name})
        console.log(response.data)
        if(response.data){
          alert(`name submitted   ${response.data.name}`)
          setName('')
        }
    }catch(err){
      console.log(err)
    }
  }


  return (
    <transfer.Provider value={{name}}>
    <div>
    <button onClick={()=>{setCount((prev)=>prev+1)}} >inc</button>
     <p>{count}</p>
      <button onClick={()=>{setCount((prev)=>prev-1)}}>dec</button>
      <input value={name}  type="text" onChange={(e)=>handleclick(e)} />
      <input ref={inputRef}  type="text" />
      <p>{name}</p>
      <button onClick={handleSubmit}>submit</button>
    </div>
    <Child1/>
     <Child2/>
    </transfer.Provider>
  )
}

export default App
