setTimeout(()=>{
    console.log('timeout',new Date())
},5000)
let i=1
let b=setInterval(()=>{
    if(i>=10){
      clearInterval(b)  
    }
    console.log(new Date())
    i++
   

},5000)

setImmediate(()=>{
    console.log('hai')
},2000)