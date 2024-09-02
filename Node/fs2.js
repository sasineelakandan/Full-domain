const express = require('express')
const fs=require('fs')

const app=express()

app.get('/',(req,res)=>{
    console.log(fs.readFileSync('file.txt','utf-8'))
    res.send('hai')
})

app.listen(8000,()=>{
    console.log('port Start')
})