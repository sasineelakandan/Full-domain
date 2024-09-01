let a=[{a:1},{a:2},{a:3},{a:4},{a:5},{a:6},{a:7}]
let sum=0
let i=0
// for(let i=0;i<a.length;i++){
//     sum+=a[i]
// }

// console.log(sum)

// while(i<a.length){
//     sum+=a[i] 
//     i++
// }



// do{
//     sum+=a[i] 
//     i++
// }while(i<a.length)
  
// for(let i=0;i<a.length;i++){
//     let obj=a[i]
//     for(let j in obj){
//        sum+= obj[j]
//     }
// }

a.forEach((val)=>{
    sum+=val.a
    
})

console.log(sum)


    
    

