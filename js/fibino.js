let a = [0, 1];

for(let i=0;i<100;i++){
    let nextValue = a[i] + a[i + 1];
    if (nextValue < 100) {
        a.push(nextValue);
    } else {
        break;
    }
    
}

console.log(a);