import React from 'react'

const child = ({count}) => {

    count('hello')
  return (
    <>
    <div> from child </div>
    
    </>
  )
}

export default child