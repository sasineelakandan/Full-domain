let str='a1b2c3e300'

let word =''
let regex = ["1","2","3","4","5","6","7","8","9","0"]
for(let i=0;i<str.length-1;i++){


    if(regex.includes(str[i+1])&&regex.includes(str[i+2])){
        let num=''
        for(let j=i+1;j<str.length;j++){
            if(!regex.includes(str[j])){
                break
            }
           num+=str[j]
        }
        word+=str[i].repeat(Number(num))
    }
  word+=str[i].repeat(Number(str[i+1]))
}

console.log(word)