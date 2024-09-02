let a=[1,2,3,4,5,6,7,9,10]

for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        for(let j=i;j<a.length;j++){
            a[j]=a[j+1]
        }
        a.length--
    }
}

console.log(a)