let a=[10,2,9,8,7,5]
let low=a[0]
let slow=a[0]
for(let i=0;i<a.length;i++){
   if(a[i]<low){
    low=a[i]
   }
   else if(a[i]<slow&&a[i]!==low){
    slow=a[i]
   }
}

console.log(low,slow)