import React, { useRef, useState } from 'react'
import Child from './child'
const App = () => {
const [count,setCount]=useState(0)

const ref=useRef()

function takevalue(){
  console.log(ref.current)
}

  return (
    <>
    <div>
      <input ref={takevalue} type="text" name="" id="" />
     <button onClick={increment} >increment</button>
     {/* <Child count={count} setCount={setCount} /> */}
    App
    
    </div>
    </>
  )
}

export default App
