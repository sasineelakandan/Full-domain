import React ,{useReducer}from 'react'
function reducerfn(state,action){
    switch(action.type){
     case 'inc':
        return {count:state.count+1}
    case 'dec':
        return {count:state.count-1}
    default :
       
          return state

    }

}
const Child1 = () => {
    const intialState={count:0}
    const [state,dispatch]=useReducer(reducerfn,intialState)
   

  return (
    <div>Child1
        <button onClick={()=>{dispatch({type:'inc'})}} >inc</button>
        <p>{state.count}</p>
        <button onClick={()=>{dispatch({type:'dec'})}} >dec</button>
    </div>
  )
}

export default Child1