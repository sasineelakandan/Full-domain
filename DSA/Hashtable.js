// let a='dgfcfrufgeahbhdbfjwfilwuarhfi'

// let obj={}
// let curr=''
// for(let i=0;i<a.length;i++){
    
//     if(obj[a[i]]){
//         continue
//     }else{
//       curr+=a[i]
//       obj[a[i]]=true
//     }

    
// }
// console.log(curr)


let a='aaaabbbbbccccccddddddd'
let obj={}
function remove(str){
    let currlength=''
    let maxlength=''
for(let i=0;i<str.length;i++){
    if(obj[str[i]]){
        currlength+=str[i]
    }else{
        currlength=str[i]
        obj[str[i]]=true
    }

    
}
maxlength=currlength.length>maxlength.length?currlength:maxlength
    return maxlength

}
console.log(remove(a))