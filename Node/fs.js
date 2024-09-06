const express = require("express")
const fs = require("fs")
let app = express()

app.get("/",(req,res)=>{
    let i = 0
    let int = setInterval(()=>{
     console.log(i)
    if(i==10){
        clearInterval(int)
        console.log("done")
    }
     fs.appendFileSync("text.text",`${new Date()}`+'\n')
     i++
 },1000)
}).listen(3000,()=>{
    console.log("server starts at 3000")
})