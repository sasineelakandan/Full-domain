// const str='hello world'
// let b=str.slice(1)
// console.log(b)
// console.log(str.charAt(0).toUpperCase()+b)

const obj = {a:[5,3,4,8,6],b:[6,7,2],c:[86,42,35,76,15,86],d:[1]}
let sum=0
for(let i in obj){
    if(obj[i].length>3){
        let a=obj[i]
        for(let j=0;j<a.length;j++){
            sum+=a[j] 
        }
    }
}
console.log(sum)