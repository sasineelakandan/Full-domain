
let a=[3,2,6,1,9,5,4,7]
let swap
// do{
//      swap=false
//     for(let i=0;i<a.length;i++){
//         if(a[i]>a[i+1]){
//             let temp=a[i]
//             a[i]=a[i+1]
//             a[i+1]=temp
//             swap=true
//         }
       
//     }
// }while(swap)


do{
     swap=false
  for(let i=0;i<a.length;i++){
    if(a[i]>a[i+1]){
      let temp=a[i]
      a[i]=a[i+1]
      a[i+1]=temp
      swap=true  
    }
  }
}while(swap)

    console.log(a)