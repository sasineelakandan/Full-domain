const express = require('express')
const fs=require('fs')

const app=express()

app.get('/',async(req,res)=>{
let i=1
 let b=setInterval(()=>{
    if(i>=10){
     clearInterval(b)
     res.send('hai')
    }
    fs.appendFileSync('file.txt',`${new Date()}+\n`)
    i++
    

   },2000)
})

app.listen(8000,()=>{
    console.log('port Start')
})

