import React,{useContext} from 'react'
import { transfer } from './App'


const child2 = () => {
const data=useContext(transfer)
console.log('data from child',data)
  return (
    <div>child2</div>
  )
}

export default child2