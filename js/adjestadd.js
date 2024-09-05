// let add = [1, 2,2, 3, 3, 4, 5, 6, 7, 7, 9];
// let frq={}
// for(let i=0;i<add.length;i++){
//     if(frq[add[i]]){
//         frq[add[i]]+=1
//     }else{
//         frq[add[i]]=1
//     }
// }
// console.log(frq)

// add = add.filter(num => frq[num] === 1);

// console.log(add);

let add = [1,1,2,2, 3, 3, 4, 5, 5, 6, 7, 7, 9];

for(let i = 0; i < add.length - 1; i++){
    if(add[i] % 2 !== 0 && add[i + 1] % 2 !== 0){
        add.splice(i, 2);
        i--
    }
}

console.log(add);