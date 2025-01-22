import React, { useContext } from "react"
import { ThemeContext } from "./App"

const two = () => {

const {name}=useContext(ThemeContext)
console.log(name,"name");

  return (
    <>
  <p>fro child two</p>
    <p>{name}</p>
    </>
  )
}

export default two