import React, { useContext } from 'react'
import { themeContex } from './App'
const child2 = () => {
    const name=useContext(themeContex)
    console.log(name)
  return (
    <>
    <div>child2</div>

    </>
  )
}

export default child2