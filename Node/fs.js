// const express = require("express")
// const fs = require("fs")
// let app = express()

// app.get("/",async(req,res)=>{
//     let response=await fetch('https://jsonplaceholder.typicode.com/posts')
//     let data=await response.json()
    
//     for(let i=0;i<10;i++){
//         console.log(data[i])
//     }
//     res.send('data fetched')
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



// const express=require('express')
// const app=express()
// const router=express.Router()


// app.use((req,res,next)=>{
//     console.log('hai')
//     next()
// })

// router.use((req,res,next)=>{
//     console.log('bye')
//     next()
// })

// router.use((req,res,next)=>{
//     let a=Number(req.query.a)+Number(req.query.b)
//     let b= a.toString()
//     req.sum=b
//     next()
    
// })


// router.get('/sasi',(req,res)=>{
   
//   fs.writeFile('file.txt',`sum=${req.sum}`,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('completed')
//     }
//   })
  
//     res.send('hello world')
// })

// router.get('/sasi',(req,res)=>{
//     res.send('deva')
// })
// app.use('/sasi',router)

// app.listen(5000,()=>{
//     console.log('server start')
// })




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

// Get today's date
// const today=new Date()

// const today = new Date();
// const targetDate = new Date('2025/12/26');

// // Calculate the difference in milliseconds
// const diffInMilliseconds = targetDate - today;

// // Convert milliseconds to days
// const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

// console.log(`Days until December 26, 2025: ${diffInDays}`);


// function getTimeDifference(start, end) {
//     const startTime = new Date(`01/01/2025 ${start}`);
//     const endTime = new Date(`01/01/2025 ${end}`);
//     console.log(startTime)
//     console.log(endTime)
//     const diffInMilliseconds = endTime - startTime;
//     console.log(diffInMilliseconds)
//     const diffInMinutes = diffInMilliseconds / (1000 * 60);
//     console.log(diffInMinutes)
//     const diffInHours = Math.floor(diffInMinutes / 60);
//     console.log(diffInHours)
//     const remainingMinutes = diffInMinutes % 60;
//     console.log(remainingMinutes)
    
//     return `${diffInHours} hours and ${remainingMinutes} minutes`;
//   }


// function getTimeDifference(start,end){
//  let starttime=new Date(`01/01/2025 ${start}`)
//  let endTime=new Date(`01/01/2025 ${end}`)

//  let diffmilisecond=endTime-starttime
//  console.log(diffmilisecond)
//  let difminiute=diffmilisecond/(1000*60)
//  console.log(difminiute)
//  let difhours=Math.floor(difminiute/60)
//  console.log(difhours)
//  let remainingMinutes=difminiute%60
//  console.log(remainingMinutes)

//  console.log(`difhours ${difhours} and difminute ${remainingMinutes} `)
// }
  
//   const start = "9:00 AM";
//   const end = "2:45 PM";
  
//   console.log(getTimeDifference(start, end));

// const today=new Date()
//   const targetDate=new Date('2025/12/26')

//   const difrentmiliseconds=targetDate-today

//   console.log(Math.floor(difrentmiliseconds/(1000*60*60*24)))
//   const date=new Date()
// console.log(`${date.getDate()}/${1+date.getMonth()}/${date.getFullYear()}`)

