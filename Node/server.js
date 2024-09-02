const express = require('express')


const app=express()

app.get('/',async(req,res)=>{
     
  let response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const  data=await response.json()
  res.send(data)
})

app.listen(8000,()=>{
    console.log('port Start')
})