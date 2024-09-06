let a = ['apple', 'orange', 'mango', 'banana'];
let Str=a.join('')
let b = [];

// for (let i = 0; i < a.length - 1; i++) {
//     let firstPart = a[i].slice(0, 3);
//     let secondPart = a[i + 1].slice(0, 2);
//     b.push(firstPart + secondPart); 
// }

// b.push(a[a.length - 1].slice(-4));

// console.log(b);

let i=0
let j=3
while(i<Str.length){
    b.push(Str.substr(i,j))
    i+=j
    j++
}

console.log(b)
