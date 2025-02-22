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


const arrr = [2, 4, 8, 9, 12, 3, 4, 9, 13];

let i = 0;
let j = arr.length - 1;
let result = [];

while (i <= j) {
    let obj = {};
    let key = 1;

    // Add elements from start to i
    for (let k = 0; k <= i; k++) {
        obj[`a${key}`] = arr[k];
        key++;
    }

    // Add elements from j to the end
    for (let p = j; p < arr.length; p++) {
        obj[`a${key}`] = arr[p];
        key++;
    }

    result.push(obj);
    i++;
    j--;
}

console.log(result);