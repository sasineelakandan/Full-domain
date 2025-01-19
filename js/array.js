const arr = [63839, 6172, 6291, 891, 3, 467, 357, 9982, 51996528, 58828, 1781992622, 55555, 222222];
// find the index of most oddd number and most even number
let mostevenidx=-1
let mostoddidx=-1
let mostOdd=-Infinity
let mostEven=-Infinity

arr.forEach((num,index)=>{
    if(num%2!==0){
       if(num>mostOdd){
        mostOdd=num
        mostoddidx=index

       }
    }else{
        if(num>mostOdd){
            mostEven=num
            mostevenidx=index 
    }
}
})

console.log(mostEven)
console.log(mostOdd)
console.log(mostoddidx)
console.log(mostevenidx)