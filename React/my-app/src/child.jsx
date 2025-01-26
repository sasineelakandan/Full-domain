import React from 'react'

const child = ({setCount}) => {

    setCount(1)
  return (
    <>
    <div> from parent{count}</div>
    
    </>
  )
}

export default child