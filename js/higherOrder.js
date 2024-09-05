let a=[0,1]

// let b=a.map((val)=>val*3)

// let  b=a.filter((val)=> val%2==0)
//  let big=0
// let b=a.reduce((acc,val)=>{
//     if(val>big){
//       acc=big
//       big=val
//     }
//     else if(val>acc&&val!==big){
//         acc=val
//     }
//     return [big,acc]
// },0)

// console.log(b)
 
for(let i=0;i<100;i++){
     let nextvalue= a[i]+a[i+1]
     if(nextvalue<100){
       a.push(nextvalue)
     }else{
        break
     }

    
}

console.log(a)



