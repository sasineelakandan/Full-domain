const count = increment()

function increment(){
    let count=0
    return function inc(){
        count+=1
        return count
    }
}

console.log(count())
console.log(count())
console.log(count())

// let ans = sum()
// function sum(){
//     return 1+2
// }
// console.log(ans)