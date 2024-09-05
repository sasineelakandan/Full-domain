// function A(){this.name='sasi',
//     this.age='24'}


//     A.prototype.phone=9399390899
 
//     let a= new A()

// console.log(a)
// const obj = {a:[5,3,4,8,6],b:[6,7,2],c:[86,42,35,76,15,86],d:[1]}
// let sum=0
// for(let i in obj){
//     if(obj[i].length>3){
//         let a=obj[i]
//         for(let j=0;j<a.length;j++){
//             sum+=a[j] 
//         }
//     }
// }
// console.log(sum)
// let a=[1,2,3,3,5,6,7,7]


// let b=[...new Set(a)]

// console.log(b)


obj={
hhhh:'sasi',
age:'25'
}
let str=''
let a=''
let b=Object.keys(obj)
b.forEach((val) => {
    console.log(obj[val])
   str+=val+'='+obj[val]+'&'

});
   
if(str.endsWith('&')){
   a= str.slice(0,-1)
}
console.log(a)

// console.log(`${Object.keys(obj)}=${(str)}&${Object.keys(obj)}=${(str)}`)