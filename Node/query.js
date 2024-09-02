const express = require('express')


const app=express()

app.get('/',async(req,res)=>{
 let name=req.query.id  
 let a=['a','e','i','o','u']
 for(let i=0;i<name.length;i++){
     if(a.includes(name[i])){
        console.log(name[i])
     }
 }
  
  res.send('hai')
})

app.listen(8000,()=>{
    console.log('port Start')
})