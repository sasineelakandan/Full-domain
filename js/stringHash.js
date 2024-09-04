const str='aahdddmyksfdhoshvfednhsw'

function removedup(str){
 let unique={}
 let uniquee=''
 for(let i=0;i<str.length;i++){
    if(unique[str[i]]){
        continue
    }else{
      uniquee+=str[i]
      unique[str[i]]=true
    }
 }

 return uniquee


}


console.log(removedup(str))