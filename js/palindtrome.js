let Name='malayalam'
let a=Name.split('')
for(let i=0,j=a.length-1;i<a.length/2;i++,j--){
    let temp=a[i]
    a[i]=a[j]
    a[j]=temp
}
 let b=a.join('')

 if(b==Name){
    console.log('palintrome')
 }else{
    console.log('not')
 }
