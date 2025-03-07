import { useReducer, useRef, useState,useContext,createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { toggle } from './toggle'





function App() {
  const [value, setValue] = useState({ value: '', checked: false });
  const [error,setError]=useState('')
  const [arr,setArr]=useState([])
  function handleAdd(){
    if(value.value.trim()){
      setArr([...arr,value])
      setValue({ value: '', checked: false })
    }else{
      setError('can not be empty')
    }
  }

  function handlecheck(i){
   setArr(arr.map((val,ind)=>{
   return  i===ind? {...val,checked:!val.checked}:val
   }))
  }
 console.log(arr)
  return (
    <>
    <input value={value.value} onChange={(e)=>setValue({...value,value:e.target.value})} type="text" style={{paddingTop:'15px',paddingBottom:'15px',paddingLeft:'30px', padding:'8x',borderRadius:'5px',border:'1px solid #ccc'}} />
    
    <button style={{backgroundColor:'red',marginLeft:'8px'}} onClick={handleAdd}  >add</button>
    {error && <div style={{color:'red'}}>{error} </div>}
    <ul style={{listStyle:'none',padding:'0px'}} >
    {arr.map((val,index)=>{

    return   <li style={{padding:'10px',marginTop:'5px', backgroundColor:'red',color:'white',boxShadow:'2px 2px 10px rgpa(0,0,0,0.2)',textAlign:'center',borderRadiuse:'10px'}} key={index} ><input checked={val.checked}  onChange={()=>{handlecheck(index)}} type="checkbox" style={{marginRight:'20px',position:'relative'}} />{val.value}</li>
   })}
    </ul>
    
    </>
  )
}

export default App
