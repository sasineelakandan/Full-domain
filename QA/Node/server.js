// const http=require('http')

// http.createServer((req,res)=>{
//     if(req.url=='/login'){
//         res.end('bye')
//     }
//   res.writeHead(200)
  
//   res.end('hai')
// }).listen(4000)
const express=require('express')
const router=express.Router()
const app=express()
const fs=require('fs')
const cors=require('cors')
app.use((req,res,next)=>{
    const {a,b}=req.query
    console.log(req.query)
    console.log(a,b)
    let sum=Number(a)+Number(b)
    req.sum=sum
    next()
})
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }));
app.get('/',(req,res)=>{
    res.send('hello world')
})



app.post('/login',(req,res)=>{
    res.status(200).json({name:req.body.name})
})
app.use('/api',router)

app.listen(8000,()=>{
    console.log('server start')
})