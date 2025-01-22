import { useEffect, useState ,useRef,useReducer} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Child from './child'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount((prev)=>prev+=1);
  }
  function decrement(){
    setCount((prev)=>prev-=1);

  }
  const [isVisible,setVisible]=useState(false)

  function makevisible(){
    setVisible((prev)=>!prev)
  }
  const [ischange,setChange]=useState(false)

  function change(){
    setChange((prev)=>!prev)
  }
  let i=0

  useEffect(()=>{
   const b=setInterval(()=>{
    console.log('hai')
    i++
     },5000)
     return ()=>{
      console.log('return function')
      clearInterval(b)
      
      }
  },[])
const myRef=useRef(0)

  myRef.current+=1
  function input1(e){
    setInput(e.target.value)
  }

  const [input,setInput]=useState('')
  function input2(e){
    setInput2(e.target.value)
  }

  const [inputn,setInput2]=useState()

  
  if(input==inputn){
    console.log('same')
  }else{
    console.log('notsame')
  }
 const intialstate=0

 const [state,dispatch]= useReducer(reducerfn,intialstate)

 function reducerfn(state,action){
   switch(action.type){
     case 'increment':
      return state+=1
     case  'decrement':
      return state-=1

   }
 }

  return (
    <>
     <button onClick={increment} >Increment</button>
     <button onClick={decrement}  >decrement</button>
     <input  onChange={input1} type="text" />
     <input  onChange={input2} type="text" />
     <button onClick={makevisible}  >makevisible</button>
     <button onClick={change} >Changebg</button>
     <p>{count}</p>
    {isVisible&& <p style={{background:ischange?'lightblue':'white' }}>hai i am sasi</p>}
     <p>{inputn}</p>
    <p>{input}</p>
    <button onClick={()=>{dispatch({type:'increment'})}}>inc</button>
    <button onClick={()=>{dispatch({type:'decrement'})}}>inc</button>
    <p>{state}</p>
    <Child count={'sasi'} />
    </>
    
  )
}

export default App
