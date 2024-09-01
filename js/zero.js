
// let arr=[]
// let arr2=[]
// for(let i=0;i<a.length;i++){
//     if(a[i]==0){
//       arr.push(a[i])
//     }else{
//       arr2.push(a[i])
//     }
    
    
// }

// let b=arr2.concat(arr)

// console.log(b)


let arr = [0, 1, 2, 0, 3, 5];
let j = 0; 

for (let i = 0; i < arr.length; i++) {
    if(arr[i]!==0){
     
      
      if(i!==j){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
      }
      j++
    }
}

console.log(arr)





