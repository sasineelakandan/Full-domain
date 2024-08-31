let a=[10,2,3,4,5,6]
let l=0
let sl=0
for(let i=0;i<a.length;i++){
 if(a[i]>l){
    sl=l
    l=a[i]
 }
 else if(a[i]>sl&&a[i]!==l){
    sl=a[i]
 }
 
}
console.log(sl,l)

