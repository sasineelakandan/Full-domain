// const express = require("express")
const fs = require("fs")
// let app = express()

// app.get("/",(req,res)=>{
//     let i = 0
//     let int = setInterval(()=>{
//      console.log(i)
//     if(i==10){
//         clearInterval(int)
//         console.log("done")
//     }
//      fs.appendFileSync("text.text",`${new Date()}`+'\n')
//      i++
//  },1000)
// }).listen(3000,()=>{
//     console.log("server starts at 3000")
// })

// const express=require('express')
// const fs=require('fs')
// const app=express()

// app.get('/',(req,res)=>{

//      fs.appendFileSync('file.txt',`${new Date()}`)
//      fs.unlink('file.txt')
//      res.send('hai')
// })
// app.get('/:id',(req,res)=>{
//     console.log(req.params.id)
// })

// app.listen(5000,()=>{console.log('server start')});



const express=require('express')
const app=express()
const router=express.Router()


// app.use((req,res,next)=>{
//     console.log('hai')
//     next()
// })

// router.use((req,res,next)=>{
//     console.log('bye')
//     next()
// })



app.get('/',(req,res)=>{
    let a=Number(req.query.a)+Number(req.query.b)
    let b= a.toString()
  fs.writeFile('file.txt',`sum=${b}`,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('completed')
    }
  })
  
    res.send('hello world')
})

// router.get('/sasi',(req,res)=>{
//     res.send('deva')
// })
// app.use('/',router)

app.listen(5000,()=>{
    console.log('server start')
})




// const emitter=new event()


// emitter.on('greet',(name)=>{
//     console.log(name)
// })

// emitter.emit('greet','sasi')

// let i=0
// const a=setInterval(()=>{
//   if(i==10){
//     clearInterval(a)
//   }
//   fs.appendFileSync('file.txt',`${new Date()}`+'\n')
//   i++
// },1000)

// fs.unlink('file.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('complete');
        
//     }
// })





