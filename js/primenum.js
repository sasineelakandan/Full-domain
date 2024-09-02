let a=[2,3,4,5,6,8,7,9,11]
// let prime=[]

// for(let i=0;i<a.length;i++){
//     let isPrime=true
//    for(let j=2;j<a[i];j++){
//      if(a[i]%j==0){
//         isPrime=false
//         break
//      }
   
     
//    }if(isPrime){
//     prime.push(a[i])
//    }


// console.log(prime)


for(let i=0;i<a.length;i++){
   let prime=true
   for(let j=2;j<a[i];j++){
      if(a[i]%j==0){
         prime=false
         break
      }
   }if(prime){
      console.log(a[i])
   }
}