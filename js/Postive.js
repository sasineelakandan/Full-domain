let a=[-1,2,3,4,-6,-9,7.5]
// let b=a.reduce((acc,cur)=>{
//     if(cur>0){
//       acc=acc+cur
      
//     }
//     return acc
// },0)

// console.log(b)

let b=a.filter((val)=>{
    if(Number.isInteger(val)){
        if(val>0){
            return val
        }
    }
})
   

console.log(b)

