import React from 'react'

const Child = ({setName}) => {


  return (
    <>
    <div>Child</div>

    <input onChange={(e)=>{setName(e.target.value)}} type="text" />
     </>   
  )
}

export default Child