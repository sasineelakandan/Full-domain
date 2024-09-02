const express = require('express')


const app=express()

app.get('/',(req,res)=>{

    res.send('hai')
})

app.get('/:id',(req,res)=>{
    
    res.send(req.params.id)
})

app.listen(8000,()=>{
    console.log('port Start')
})