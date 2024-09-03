const express = require('express')


const app=express()

app.use((req,res,next)=>{
   
    let a=10
    let b=20
    let sum=a+b
    req.sum=sum
    next()
 
 })


app.get('/',(req,res)=>{
     
   res.send(`${req.sum}`) 
  
})



app.listen(8001,()=>{
    console.log('port Start')
})