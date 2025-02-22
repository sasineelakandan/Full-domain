 let add = [1,2,6,3,5,6,7,8,9];


// while(i<add.length){
//     if(add[i]%2==0&&add[i+1]%2==0){
//       let start=i
//       console.log(start)
//       while(i<add.length&&add[i]%2==0){
//         i++
//       }
//       console.log(i)
//       console.log(start)
//       add.splice(start,i-start)
//       i=Math.max(0,start)
//     }else{
//         i++
//     }

// }


// for(let i=0;i<add.length;i++){
//   let duplicate=false
//   if(add[i]%2==0){
//     for(let j=0;j<add.length;j++){
     
//       if(add[i]==add[j]&&i!=j){
//         duplicate=true
//       }
//     }
//   }if(!duplicate){
//     console.log(add[i])
// }
  
// }


// output = [{a1:2,a2:13},{a1:2,a2:4,a3:9,a4:13},{a1:2,a2:4,a3:8,a4:4,a5:9,a6:13},{a1:2,a2:4,a3:8,a4:9,a5:3,a6:4,a7:9,a8:13},{a1:2,a2:4,a3:8,a4:9,a5:12,a6:3,a7:3,a8:4,a9:9,a10:13}]

let start=0
let end=arr.length-1
let result=[]
while(start<end){
  let obj={}
  let key=1
  
  for(let i=0;i<=start;i++){
    obj[`a${key}`]=arr[i]
    key++
  }
  
  for(let k=end;k<arr.length;k++){
    obj[`a${key}`]=arr[k]
    key++
  }
  
  start++
  end--
  result.push(obj)

}

console.log(result)



const arr = [2,4,8,9,12,3,4,9,13]

