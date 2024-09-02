let a=[1,2,3,3,4,5,5,6,7,8]

// let b=[...new Set(a)]

let b=a.filter((val)=> a.indexOf(val)!==a.lastIndexOf(val))

console.log(b)


