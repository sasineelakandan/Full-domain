// let a=[1,2,3,4,5,6]
// let b=[...a]
// b.push(43)
// console.log(a)


// setTimeout(()=>{
//     console.log('hai 1')
//     setTimeout(()=>{
//         console.log('hai 2')
//         setTimeout(()=>{
//             console.log('hai 3')
            
//         },2000)
        
//     },2000)
// },2000)


// function curr(a,b,c){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(curr(3)(4)(5))
 

let res = ()=>{
    console.log(this)
}
res()