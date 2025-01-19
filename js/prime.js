let a=[2,3,4,5,6,7,8,9,11]
let sum=0
for(let i=0;i<a.length;i++){
    let prime=false
   for(let j=2;j<a[i];j++){
     if(a[i]%j==0){
        prime=true
     }
   }
   if(!prime){
    sum+=a[i]
   }
}

console.log(sum)

let b=[]
 arr=a.length
for(let i=0;i<arr;i++)
    b.push(a.pop())
console.log(b)