let a=[5,2,3,4]

function*fn(){
 
    yield a[Math.floor(Math.random()*a.length)]
   
}

let b=fn()

console.log(b.next().value)

