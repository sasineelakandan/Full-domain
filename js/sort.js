let a=[0,0,9,0,8,7,3,1,6]

// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//        if(a[i]>a[j]){
//         let temp=a[i]
//         a[i]=a[j]
//         a[j]=temp
//        }
//     }
// }

// console.log(a)
let j=0
for(let i=0;i<a.length;i++){
    if(a[i]!==0){
        if(i!==j){
            let temp=a[i]
            a[i]=a[j]
            a[j]=temp
        }
        j++
    }
}

console.log(a)